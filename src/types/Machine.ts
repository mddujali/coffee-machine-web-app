import type { Recipe } from '@/types/Recipe.ts'
import type { Container } from '@/types/Container.ts'

export interface Machine {
  recipes: Recipe[]
  containers: Container[]
}
