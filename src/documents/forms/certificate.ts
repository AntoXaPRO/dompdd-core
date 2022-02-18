import { SchemaOf, object, string, number, date } from 'yup'
import { BaseDbValidEntity } from '../../base'

/*
 * Форма свидетельства.
 */
export type TCertificateForm = {
  person: string

  number?: number
  date?: Date
  comment?: string
}

/**
 * Схема валидации.
 */
export const certificateValidSchema = {
  person: string()
    .meta({ label: 'Персональные данные' })
    .required('Укажите персональные данные'),
  number: number()
    .meta({ label: 'Номер' }),
  date: date()
    .meta({ label: 'Дата выдачи' }),
  comment: string()
    .meta({ label: 'Примечание' })
}

/**
 * Схема валидации формы.
 */
const certificateFormValidSchema: SchemaOf<TCertificateForm> = object(
  certificateValidSchema
)

/**
 * Форма свидетельства.
 */
export class CertificateFormModel extends BaseDbValidEntity<TCertificateForm> {
  constructor(obj: any = {}) {
    super(obj, certificateFormValidSchema)
  }
}
