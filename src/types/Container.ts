import type { Unit } from '@/types/Unit.ts'

export interface Container {
  id: number
  name: string
  type: string
  quantity: number
  unit: Unit
}
