import { defineStore } from 'pinia'
import api from '@/api'
import type { MachineState } from '@/types/MachineState.ts'
import type { MachineStatusResponseData } from '@/types/MachineStatusResponseData.ts'
import type { BrewCoffeeResponseData } from '@/types/BrewCoffeeResponseData.ts'

export const useMachineStore = defineStore('machine', {
  state: (): MachineState => ({
    isCheckingStatus: false,
    isBrewingCoffee: false,
    recipes: [],
    containers: [],
    infoMessage: null,
  }),

  actions: {
    async checkStatus(): Promise<void> {
      this.isCheckingStatus = true

      try {
        const response = await api.get('/machine/status')
        const { data }: { data: MachineStatusResponseData } = response

        this.recipes = data.data.recipes
        this.containers = data.data.containers
        this.infoMessage = data.message
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
        throw error
      } finally {
        this.isBrewingCoffee = false
      }
    },
  },
})
