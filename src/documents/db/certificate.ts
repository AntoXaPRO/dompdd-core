import { TBaseDbEntity } from '../../base'
import { TPerson } from '../../auth/db/person'
import { TUnit } from '../../organization/db/unit'

/**
 * Тип данных (свидетельство об окончании).
 */
export type TCertificate = TBaseDbEntity & {
  unit: TUnit
  person: TPerson

  number?: number
  date?: Date
  comment?: string
}
