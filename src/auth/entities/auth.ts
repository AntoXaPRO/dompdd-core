/**
 * Полезная нагрузка для авторизации.
 */
export type TAuthPayload = {
  _id: string;
  ip: string;
  isDev?: boolean;
};

/**
 * Объект получаемый после успешной авторизации.
 */
export type TAuthObj = {
  token: string;
  payload: TAuthPayload;
};
