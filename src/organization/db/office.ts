import { TBaseDbEntity } from '../../base';
// import { TUnit } from './unit';

/**
 * Интерфейс офиса обучения.
 */
export type TOffice = TBaseDbEntity & {
  unit: string;

  name: string;
  location: string;
  operatingTime: string;

  prefix: string;
  places: number;
  space: number;
  number: number;

  sale?: {
    price: number;
    description: string;
  };
};
