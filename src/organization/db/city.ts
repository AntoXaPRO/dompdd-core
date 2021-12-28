import { TBaseDbEntity } from '../../base';

/**
 * Тип данных - город.
 */
export type TCity = TBaseDbEntity & {
  name: string;
  alias: string;
};
