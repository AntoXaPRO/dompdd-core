import { object, string, SchemaOf } from 'yup';
import { BaseValidEntity } from '../../base';

/**
 * Форма авторизации.
 */
export type TAuthForm = {
  login: string;
  password: string;
};

/**
 * Схема валидации.
 */
export const validFormSchema: SchemaOf<TAuthForm> = object({
  login: string()
    .meta({ label: 'Логин' })
    .lowercase()
    .trim()
    .required('Укажите логин'),
  password: string()
    .meta({ label: 'Пароль' })
    .trim()
    .required('Укажите пароль'),
});

/**
 * Экспорт модуля.
 */
export class AuthFormModel extends BaseValidEntity<TAuthForm> {
  constructor(obj: TAuthForm) {
    super(obj, validFormSchema);
  }
}
