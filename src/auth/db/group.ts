import { TBaseDbEntity } from '../../base'

/**
 * Интерфейс группы аккаунтов.
 */
export type TGroup = TBaseDbEntity & {
  name: string
  description?: string
}
