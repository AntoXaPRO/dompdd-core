import { SchemaOf, object, string } from 'yup';

import { BaseDbValidForm } from '../../base';
import { personValidSchema } from './person';

/**
 * Тип формы регистрации.
 */
export type TRegisterForm = {
  gender: string;

  lastName: string;
  firstName: string;
  middleName: string;

  birthday: Date;

  phone: number;
  email: string;
  password: string;
};

/**
 * Схема валидации формы.
 */
const formValidSchema: SchemaOf<TRegisterForm> = object({
  gender: personValidSchema.gender.required('Укажите гендер'),
  lastName: personValidSchema.lastName.required('Укажите фамилию'),
  firstName: personValidSchema.firstName.required('Укажите имя'),
  middleName: personValidSchema.middleName.required('Укажите отчество'),
  birthday: personValidSchema.birthday.required('Укажите дату рождения'),
  phone: personValidSchema.phone.required('Укажите номер телефона'),
  email: string()
    .meta({ label: 'Email' })
    .trim()
    .lowercase()
    .required('Укажите адрес электронной почты')
    .email('Укажите корректный адрес электронной почты')
    .max(30, 'Адрес электронной почты должен содержать не более 30 символов'),
  password: string()
    .meta({ label: 'Пароль' })
    .required('Укажите пароль')
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .max(30, 'Пароль должен содержать не более 6 символов'),
});

/**
 * Форма регистрации.
 */
export class RegisterFormModel extends BaseDbValidForm<TRegisterForm> {
  constructor(obj: any = {}) {
    // Дата рождения.
    if (obj.birthday) {
      try {
        obj.birthday = new Date(obj.birthday);
      } catch (ex) {}
    }

    super(obj, formValidSchema);
  }
}
