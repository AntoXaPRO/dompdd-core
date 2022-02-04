import { string, object, date, SchemaOf } from 'yup'
import { BaseDbValidEntity } from '../../base'

// Проверка ФИО.
export const reqexpFIO = /^[А-яЁё]+$/
// Значения номера.
export const reqexpPhone = /^[9]\d{9}$/

/**
 * Перечисление гендеров.
 */
export enum GenderEnum {
  man = 'man',
  woman = 'woman'
}

/**
 * Тип гендера.
 */
export type TGender = keyof typeof GenderEnum

/**
 * Список значения типов гендера.
 */
export const genders = Object.keys(GenderEnum)

/**
 * Трансформация номера телефона.
 */
export const getPhoneNumberValue = (
  phone?: any
): number | undefined => {
  if (phone) {
    if (typeof phone === 'number') {
      phone = phone.toString()
    }

    if (typeof phone === 'string') {
      phone = phone.replace(/\D/g, '').replace(/^[78]/, '')
      return Number.parseInt(phone) || undefined
    }
  }

  return undefined
}

/**
 * Валидация мобильного номера телефона.
 */
export const validPhoneNumber = (value?: number | string) => {
  if (!value) return false
  const str: string = value.toString()
  if (str.length !== 10) return false
  if (str.match(reqexpPhone) === null) return false
  return true
}

/**
 * Формат номера телефона.
 */
export const getPhoneNumberFormat = (
  phone: number | string,
  prefix: string = '+7 '
): string => {
  let result = prefix
  const strValue = getPhoneNumberValue(phone)?.toString().substring(0, 10)
  if (strValue) {
    for (let i = 0; i < strValue.length; i++) {
      if (i === 3 || i === 6 || i === 8) result += ' '
      result += strValue[i]
    }
  }
  return result
}

/**
 * Функция для проеобрадования ФИО.
 */
export const capitalize = (str: string = '') => {
  return str[0] ? str[0].toUpperCase() + str.substring(1) : ''
}

/**
 * Тип данных (форма перс. данных).
 */
export type TPersonForm = {
  gender: string
  firstName: string

  middleName?: string
  lastName?: string

  birthday?: Date
  phone?: string
  comment?: string
}

/**
 * Базовая схема валидации данных.
 */
export const personValidSchema = {
  gender: string()
    .meta({ label: 'Гендер' })
    .oneOf(genders)
    .required('Укажите гендер'),
  firstName: string()
    .meta({ label: 'Имя' })
    .trim()
    .matches(reqexpFIO, 'Имя должно содержать только буквы')
    .min(2, 'Фамилия должна содержать минимум 2 символа')
    .max(30, 'Фамилия должна содержать не более 30 символов')
    .required('Укажите имя'),
  middleName: string()
    .meta({ label: 'Отчество' })
    .trim()
    .matches(reqexpFIO, 'Отчество должно содержать только буквы')
    .min(2, 'Отчество должно содержать минимум 2 символа')
    .max(30, 'Отчество должно содержать не более 30 символов'),
  lastName: string()
    .meta({ label: 'Фамилия' })
    .trim()
    .matches(reqexpFIO, 'Фамилия должна содержать только буквы')
    .min(2, 'Фамилия должна содержать минимум 2 символа')
    .max(30, 'Фамилия должна содержать не более 30 символов'),
  birthday: date()
    .meta({ label: 'Дата рождения' }),
  phone: string()
    .meta({ label: 'Телефон' }) 
    // .transform((value, original) => getPhoneNumberValue(original))
    .test(
      'phoneNumber',
      'Укажите корректный номер телефона',
      (value?: number | string) => {
        if(value) {
          value = getPhoneNumberValue(value)
          return validPhoneNumber(value) 
        }else{
          return true
        }
      }
    ),
  comment: string()
    .meta({ label: 'Комментарий' })
    .max(300, 'Комментарий должен содержать не более 300 символов')
}

/**
 * Схема валидации формы.
 */
const personFromValidSchema: SchemaOf<TPersonForm> = object(personValidSchema)

/**
 * Форма перс. данных.
 */
export class PersonFormModel extends BaseDbValidEntity<TPersonForm> {
  constructor(obj: any = {}) {
    // Если пол не указан (по умолчанию).
    if (!obj.gender) {
      obj.gender = GenderEnum.man
    }
    // Дата Д.Р.
    if (obj.birthday) {
      try {
        obj.birthday = new Date(obj.birthday)
      } catch (ex) {
        obj.birthday = undefined
      }
    }
    super(obj, personFromValidSchema)
  }

  static getPhoneNumberFormat = getPhoneNumberFormat
  static getPhoneNumberValue = getPhoneNumberValue
  static validPhoneNumber = validPhoneNumber
  static capitalize = capitalize
}
