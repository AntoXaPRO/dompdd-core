import { TBaseDbEntity } from '../../base'
import { TPerson } from '../../auth/db/person'

/**
 * Тип данных (свидетельство об окончании).
 */
export type TCertificate = TBaseDbEntity & {
  person: TPerson

  number?: number
  date?: Date
  comment?: string
}
