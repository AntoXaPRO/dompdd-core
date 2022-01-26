import { TBaseDbEntity } from '../../base'
import { TPerson } from '../../auth/db/person'

/**
 * Тип данных (Инструктор).
 */
export type TInstructor = TBaseDbEntity & {
  // Подразделения.
  units: string[]
  // Перс. данные.
  person: TPerson

  // Заблокирован.
  disabled: boolean
  // Алиас.
  alias: string

  // Слоган.
  slogan?: string
  // Особенности.
  feature?: string
  // Хобби.
  hobbies?: string[]
  // Фильмы/Книги.
  cinema?: string[]

  // Текст.
  text?: string

  // Временные поля.
  _tmp?: any
}
