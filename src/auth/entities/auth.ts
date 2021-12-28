/**
 * Полезная нагрузка для авторизации.
 */
export type TAuthPayload = {
  _id: string;
  email: string;
  isDev?: boolean;
  groups: string[];
};

/**
 * Объект получаемый после успешной авторизации.
 */
export type TAuthObj = {
  token: string;
  payload: TAuthPayload;
};
