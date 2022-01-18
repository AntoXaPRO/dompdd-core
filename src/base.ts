import { IValidEntity, ValidEntity } from 'axp-ts'

/**
 * Базовая сущность.
 */
export type TBaseDbEntity = {
  _id: string
  dateCreate?: number
  dateUpdate?: number
}

/**
 * Базовый интерфейс для валидируемой сощности.
 */
export interface IBaseValidEntity<T> extends IValidEntity<T> {}

/**
 * Базовый интерфейс для валидируемой сущности из БД.
 */
export interface IBaseDbValidEntity<T> extends IBaseValidEntity<T> {
  _id: string
  dateCreate?: number
  dateUpdate?: number
}

/**
 * Модель для валидирования сущностей.
 */
export class BaseValidEntity<T>
  extends ValidEntity<T>
  implements IBaseValidEntity<T>
{
  constructor(obj: T, schema: any) {
    super(obj, schema)
  }
}

/**
 * Модель для валидирования сущностей из БД.
 */
export class BaseDbValidEntity<T>
  extends BaseValidEntity<T>
  implements IBaseDbValidEntity<T>
{
  _id: string

  dateCreate?: number
  dateUpdate?: number

  constructor(obj: any, schema: any) {
    super(obj, schema)

    this._id = obj._id || ''

    this.dateCreate = obj.dateCreate
    this.dateUpdate = obj.dateUpdate
  }
}
