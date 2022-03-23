import * as db from './db'
import * as forms from './forms'
import * as entities from './entities'

import { TAccount } from './db/account'

/**
 * Данные для возврата после авторизации/регистрации.
 */
export type TAuthObj = {
  token: string
  account: TAccount
}

export { db, forms, entities }
