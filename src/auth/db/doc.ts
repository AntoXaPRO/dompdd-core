import { TBaseDbEntity } from '../../base'
import { TPerson } from './person'
import { TDocType } from '../forms/doc'

/**
 * Документ.
 */
export type TDoc = TBaseDbEntity & {
  // Тип документа.
  type: TDocType
  // Перс. данные.
  person: TPerson

  // Серия.
  series?: string
  // Номер.
  number?: string
  // Выдан.
  issued?: string
  // Дата выдачи.
  date?: Date

  // Название.
  name?: string
}
