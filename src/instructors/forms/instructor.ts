import { SchemaOf, object, string, array, boolean } from 'yup'
import { BaseDbValidEntity } from '../../base'

/**
 * Тип данных (форма инструктора).
 */
export type TInstructorForm = {
  _id?: string
  
  // Алиас.
  alias: string
  // Подразделения.
  units: string[]
  // Перс. данные.
  person: string

  // Заблокирован.
  disabled?: boolean
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
}

/**
 * Схема валидации формы.
 */
export const schemaForm: SchemaOf<TInstructorForm> = object({
  _id: string()
    .meta({ label: 'ID' })
    .trim()
    .lowercase(),
  
  // Алиас.
  alias: string()
    .meta({ label: 'Псевдоним' })
    .trim()
    .lowercase()
    .max(30)
    .required('Укажите псевдоним'),
  // Подразделения.
  units: array()
    .meta({ label: 'Подразделения' })
    .required('Укажите минимум одно подразделение'),
  // Перс. данные.
  person: string()
    .meta({ label: 'Персональные данные' })
    .trim()
    .lowercase()
    .required('Укажите персональные данные'),

  // Заблокирован.
  disabled: boolean()
    .meta({ label: 'Заблокирован' })
    .default(true),
  // Слоган.
  slogan: string()
    .max(300)
    .meta({ label: 'Слоган' }),
  // Особенности.
  feature: string()
    .max(300)
    .meta({ label: 'Особенности' }),
  // Хобби.
  hobbies: array()
    .meta({ label: 'Хобби' }),
  // Фильмы/Книги.
  cinema: array()
    .meta({ label: 'Фильмы/Книги' }),

  // Текст.
  text: string()
    .max(3000)
    .meta({ label: 'Текст' })
})

/**
 * Тип данных (Форма инструктора)
 */
export type TInstructorFormModel = BaseDbValidEntity<TInstructorForm>

/**
 * Форма инструктора.
 */
export class InstructorFormModel extends BaseDbValidEntity<TInstructorForm> {
  constructor(obj: any = {}) {
    obj.person = obj.person?._id || obj.person
    super(obj, schemaForm)
  }
}
