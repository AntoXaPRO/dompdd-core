import { TBaseDbEntity } from '../../base';
import { TAvatar } from '../entities/avatar';
import { TAccount } from './account';

/**
 * Перечисление гендеров.
 */
export enum GenderEnum {
  man = 'man',
  woman = 'woman',
}

/**
 * Тип гендера.
 */
export type TGender = keyof typeof GenderEnum;

/**
 * Список значения типов гендера.
 */
export const genders = Object.keys(GenderEnum);

/**
 * Тип данных перс. данных.
 */
export type TPerson = TBaseDbEntity & {
  gender: string;
  avatar: TAvatar;

  fullName: string;
  firstName: string;

  lastName?: string;
  middleName?: string;

  birthday?: Date;
  phone?: number;

  account?: TAccount;

  comment?: string;
};
