import type { ErrorResponseData } from '@/types/ErrorResponseData.ts'

export interface AxiosErrorResponse {
  isAxiosError: boolean
  response: {
    status: number
    data: ErrorResponseData
  }
}
