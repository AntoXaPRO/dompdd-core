import { SchemaOf, object, boolean, string, array } from 'yup'
import { BaseDbValidEntity } from '../../base'

/**
 * Тип данных (форма аккаунта)
 */
export type TAccountForm = {
  disabled: boolean
  email: string
  groups: string[]

  newPassword?: string
}

/**
 * Схема валидации.
 */
export const accountValidSchema = {
  disabled: boolean()
    .meta({ label: 'Заблокирован' })
    .default(false),
  email: string()
    .meta({ label: 'Email' })
    .required('Укажите адрес электронной почты')
    .email('Укажите корректный адрес электронной почты'),
  groups: array()
    .meta({ label: 'Группы' }),
  newPassword: string()
    .meta({ label: 'Новый пароль' })
    .min(6, 'Пароль должен содержать минимум 6 символов')
}

/**
 * Схема валидации формы.
 */
const accountFormValidSchema: SchemaOf<TAccountForm> = object(accountValidSchema)

/**
 * Форма аккаунта.
 */
export class AccountFormModel extends BaseDbValidEntity<TAccountForm> {
  constructor(obj: any = {}) {
    // Конвертируем группы.
    try{
      let groups: string[] = []
      for(let i = 0; i < obj.groups.lenght; i++) {
        groups.push(obj.groups[i]._id)
      }
      obj.groups = groups
    }catch(ex: any) {
      obj.groups = []
    }

    super(obj, accountFormValidSchema)
  }

  convertPreSave() {
    this.obj.disabled = this.obj.disabled ? true : false
    return this.obj
  }
}
