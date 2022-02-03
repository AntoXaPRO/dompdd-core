import { BaseDbValidEntity } from '../../base'
import { SchemaOf, object, string, date } from 'yup'

/**
 * Перечисление названий типов документов.
 */
export enum DocTypesEnum {
  // Паспорт РФ.
  passport = 'passport',
  // Иностранный паспорт.
  passport_foreign = 'passport_foreign',
  // Водительское удостоверение.
  woman = 'vu',
  // Документ на право обучения.
  right_to_study = 'right_to_study',
  // Удостовере-ние о повышении квалификации.
  prof_qualification = 'prof_qualification'
}

/**
 * Список названий типов документов.
 */
export const docTypes = Object.keys(DocTypesEnum)

/**
 * Тип документа.
 */
export type TDocType = keyof typeof DocTypesEnum

/**
 * Тип данных (форма документа).
 */
export type TDocForm = {
  // ID.
  _id?: string

  // Тип документа.
  type: string
  // Перс. данные.
  person: string

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

/**
 * Базовая схема валидации данных.
 */
export const docValidSchema = {
  // ID.
  _id: string()
    .meta({ label: 'ID' })
    .trim()
    .lowercase(),
  // Тип документа.
  type: string()
    .meta({ label: 'Тип документа' })
    .required('Укажите тип документа')
    .oneOf(docTypes),
  // Перс. данные.
  person: string()
    .meta({ label: 'Перс. данные' })
    .trim()
    .lowercase()
    .required('Укажите персональные данные'),
  // Серия.
  series: string()
    .meta({ label: 'Серия' })
    .trim()
    .max(4, 'Серия документа должна содержать не более 4 символов')
    .lowercase(),
  // Номер.
  number?: string()
    .meta({ label: 'Номер' })
    .trim()
    .max(6, 'Номер документа должн содержать не более 6 символов')
    .lowercase(),
  // Выдан.
  issued: string()
    .meta({ label: 'Кем выдан' }),
  // Дата выдачи.
  date: date()
    .meta({ label: 'Дата выдачи' }),
  // Название.
  name: string()
    .meta({ label: 'Название' })
}

/**
 * Схема валидации формы.
 */
export const docFromValidSchema: SchemaOf<TDocForm> = object(docValidSchema)

/**
 * Форма документа.
 */
export class DocFormModel extends BaseDbValidEntity<TDocForm> {
  constructor(obj: any = {}) {
    super(obj, docFromValidSchema)
  }
}
