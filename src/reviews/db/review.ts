import { TBaseDbEntity } from '../../base'
import { TPerson } from '../../auth/db/person'

/**
 * Отзыв.
 */
export type TReview = TBaseDbEntity & {
  units: string[]

  title: string
  text: string

  person?: TPerson
  published?: boolean
  first?: boolean
  instructor?: string
  video?: string

  tmp?: object

  // Виртуальные поля.
  userName: string
  image: string
  oldId: string
}
