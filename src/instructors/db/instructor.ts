import { TBaseDbEntity } from '../../base'
import { TPerson } from '../../auth/db/person'

/**
 * Тип данных (Инструктор).
 */
export type TInstructor = TBaseDbEntity & {
  // Заблокирован.
  disabled: boolean

  // Алиас.
  alias: string

  // Подразделения.
  units: string[]
  // Перс. данные.
  person: TPerson

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
