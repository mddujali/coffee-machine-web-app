import type { Recipe } from '@/types/Recipe.ts'
import type { Container } from '@/types/Container.ts'

export interface BrewCoffeeData {
  recipe: Recipe
  containers: Container[]
}
