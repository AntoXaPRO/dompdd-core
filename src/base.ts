import { ValidEntity } from 'axp-ts';

/**
 * Базовая сущность.
 */
export type TBaseDbEntity = {
  _id: string;
  dateCreate?: number;
  dateUpdate?: number;
};

/**
 * Интерфейс базовой сущности в БД.
 */
export interface IBaseDbEntity extends TBaseDbEntity {
  toString(): string;
}

/**
 * Базовая сущность для БД.
 */
export class BaseDbEntity implements IBaseDbEntity {
  _id: string;
  dateCreate: number;
  dateUpdate: number;

  constructor(obj: any = {}) {
    this._id = obj._id || '';
    this.dateCreate = obj.dateCreate;
    this.dateUpdate = obj.dateUpdate;
  }

  toString(): string {
    return this._id?.toString() || 'undefined';
  }
}

/**
 * Базовая форма для создания или редактирования сущностей в БД.
 */
export class BaseDbValidForm<T> extends ValidEntity<T> {
  _id: string;
  dateCreate?: number;
  dateUpdate?: number;

  constructor(obj: IBaseDbEntity, schema: any) {
    super(obj, schema);
    this._id = obj._id;
    this.dateCreate = obj.dateCreate;
    this.dateUpdate = obj.dateUpdate;
  }
}
