import type { Ingredients } from '@/types/Ingredients.ts'

export interface Recipe {
  id: number
  type: string
  coffee: Ingredients
  water: Ingredients
}
