import { TBaseDbEntity } from '../../base'

import { TAvatar } from '../entities/avatar'
import { TGender } from '../forms/person'
import { TAccount } from './account'

/**
 * Тип данных перс. данных.
 */
export type TPerson = TBaseDbEntity & {
  gender: TGender
  avatar: TAvatar

  firstName: string
  fullName: string

  lastName?: string
  middleName?: string

  birthday?: Date
  phone?: string
  account?: TAccount

  comment?: string
}
