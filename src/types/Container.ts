import type { Unit } from '@/types/Unit.ts'

export interface Container {
  id: number
  type: string
  quantity: number
  unit: Unit
}
