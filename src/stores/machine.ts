import { defineStore } from 'pinia'
import api from '@/api'
import type { MachineState } from '@/types/MachineState.ts'
import type { MachineStatusResponseData } from '@/types/MachineStatusResponseData.ts'

export const useMachineStore = defineStore('machine', {
  state: (): MachineState => ({
    isCheckingStatus: false,
    recipes: [],
    containers: [],
  }),

  actions: {
    async checkStatus(): Promise<void> {
      this.isCheckingStatus = true

      try {
        const response = await api.get('/machine/status')
        const { data }: { data: MachineStatusResponseData } = response

        this.recipes = data.data.recipes
        this.containers = data.data.containers
      } catch (error: unknown) {
        throw error
      } finally {
        this.isCheckingStatus = false
      }
    },
  },
})
