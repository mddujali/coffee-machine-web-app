import { defineStore } from 'pinia'
import api from '@/api'
import _ from 'lodash'
import type { MachineState } from '@/types/MachineState.ts'
import type { MachineStatusResponseData } from '@/types/MachineStatusResponseData.ts'
import type { BrewCoffeeResponseData } from '@/types/BrewCoffeeResponseData.ts'
import type { AxiosErrorResponse } from '@/types/AxiosErrorResponse.ts'
import type { Container } from '@/types/Container.ts'

export const useMachineStore = defineStore('machine', {
  state: (): MachineState => ({
    isCheckingStatus: false,
    isBrewingCoffee: false,
    recipes: [],
    containers: [],
    infoMessage: null,
    info: {},
    errorMessage: null,
    errors: [],
  }),

  actions: {
    async checkStatus(): Promise<void> {
      this.isCheckingStatus = true

      this.infoMessage = null
      this.errorMessage = null
      this.errors = []

      try {
        const response = await api.get('/machine/status')
        const { data }: { data: MachineStatusResponseData } = response

        this.recipes = data.data.recipes
        this.containers = data.data.containers

        const containerInfo = (type: string) => {
          const container = (this.containers || []).find(
            (container: Container) => container.type === type,
          )

          return container
            ? { quantity: container.quantity, unitLabel: container.unit.label }
            : { quantity: 0, unitLabel: '' }
        }

        const coffeeInfo = containerInfo('coffee')
        const waterInfo = containerInfo('water')

        this.infoMessage = data.message
        this.info = {
          coffee: [
            `There are ${coffeeInfo.quantity}${coffeeInfo.unitLabel} in the coffee container.`,
          ],
          water: [`There are ${waterInfo.quantity}${waterInfo.unitLabel} in the water container.`],
        }
      } catch (error: unknown) {
        throw error
      } finally {
        this.isCheckingStatus = false
      }
    },

    async brewCoffee(type: string): Promise<void> {
      this.isBrewingCoffee = true

      try {
        const response = await api.post('/machine/brew-coffee', { type })
        const { data }: { data: BrewCoffeeResponseData } = response

        console.log(data)
      } catch (error: unknown) {
        if (error && typeof error === 'object' && 'isAxiosError' in error) {
          const axiosError = error as AxiosErrorResponse

          if (axiosError.isAxiosError) {
            const errorResponse = axiosError.response

            this.errorMessage = _.get(
              errorResponse,
              'data.message',
              'Unable to brew coffee. Please try again.',
            )

            console.log(errorResponse.data.errors)

            this.errors = _.get(errorResponse, 'data.errors', [])

            return
          }
        }

        this.errorMessage = 'An unexpected error occurred. Please try again later.'

        throw error
      } finally {
        this.isBrewingCoffee = false
      }
    },
  },
})
