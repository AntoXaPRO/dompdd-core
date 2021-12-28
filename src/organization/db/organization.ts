import { TBaseDbEntity } from '../../base';

/**
 * Интерфейс организации.
 */
export type TOrganization = TBaseDbEntity & {
  name: string;
  alias: string;
  slogan?: string;
};
