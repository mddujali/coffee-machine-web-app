import type { Recipe } from '@/types/Recipe.ts'
import type { Container } from '@/types/Container.ts'

export interface MachineState {
  isCheckingStatus: boolean
  recipes: Recipe[]
  containers: Container[]
}
