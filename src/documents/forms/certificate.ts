import { SchemaOf, object, string, number, date } from 'yup'
import { BaseDbValidEntity } from '../../base'

/*
 * Форма свидетельства.
 */
export type TCertificateForm = {
  _id?: string

  unit: string
  person: string

  number?: number
  date?: Date
  comment?: string
}

/**
 * Схема валидации.
 */
export const certificateValidSchema = {
  _id: string()
    .meta({ label: 'ID' })
    .trim()
    .lowercase(),

  unit: string()
    .meta({ label: 'Подразделение' })
    .trim()
    .lowercase()
    .required('Укажите подразделение'),
  person: string()
    .meta({ label: 'Персональные данные' })
    .required('Укажите персональные данные'),

  number: number()
    .meta({ label: 'Номер' }),
  date: date()
    .meta({ label: 'Дата выдачи' }),
  comment: string()
    .meta({ label: 'Примечание' })
    .max(300, 'Примечание может содержать не  более 300 символов')
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
    // Перс. данные.
    obj.person = obj.person?._id || undefined    
    // Подразделение.
    obj.unit = obj.unit?._id || undefined    

    super(obj, certificateFormValidSchema)
  }
}
