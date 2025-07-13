import type { Recipe } from '@/types/Recipe.ts'
import type { Container } from '@/types/Container.ts'

export interface MachineState {
  isCheckingStatus: boolean
  isBrewingCoffee: boolean
  isSettingContainer: boolean
  recipes: Recipe[]
  containers: Container[]
  infoMessage: string | null
  info: { coffee?: string[]; water?: string[] }
  successMessage: string | null
  details: Array<never>
  errorMessage: string | null
  errors: Array<never>
}
