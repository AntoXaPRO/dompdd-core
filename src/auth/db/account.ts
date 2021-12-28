import { TBaseDbEntity } from '../../base';
import { TPerson } from './person';
import { TGroup } from './group';

/**
 * Тип данных аккаунта.
 */
export type TAccount = TBaseDbEntity & {
  email: string;

  person: TPerson;
  groups?: TGroup[];

  passwordHash?: string;
  disabled?: boolean;
  comment?: string;
};
