import { ValidEntity } from 'axp-ts';
import { object, string, SchemaOf } from 'yup';

/**
 * Форма авторизации.
 */
export type TAuthForm = {
  login: string;
  password?: string;
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
export class AuthFormModel extends ValidEntity<TAuthForm> {
  constructor(obj: any) {
    super(obj, validFormSchema);
  }
}
