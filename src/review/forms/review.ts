import { SchemaOf, object, string, boolean, array } from 'yup'
import { BaseDbValidEntity } from '../../base'

/**
 * Тип данных форма отзыва.
 */
export type TReviewFrom = {
  _id?: string,

  units: string[],
  person: string,
  instructor: string,

  title: string,
  text: string,

  published?: boolean,
  first?: boolean,
  video?: string
}

/**
 * Схема формы.
 */
const formSchema: SchemaOf<TReviewFrom> = object({
  _id: string()
    .meta({ label: 'ID' })
    .trim()
    .lowercase(),

  units: array()
    .meta({ label: 'Подразделение' })
    .required('Укажите подразделение'),
  person: string()
    .meta({ label: 'Персональные данные' })
    .trim()
    .lowercase()
    .required('Укажите персональные данные'),
  instructor: string()
    .meta({ label: 'Инструктор' })
    .trim()
    .lowercase()
    .required('Укажите инструктора'),

  title: string()
    .meta({ label: 'Заголовок' })
    .trim()
    .max(300, 'Заголовок должен содержать максимум 30 символов')
    .required('Укажите заголовок'),
  text: string()
    .max(6000, 'Текст отзыва должен содержать максимум 1000 символов')
    .required('Введите текст отзыва'),

  published: boolean()
    .meta({ label: 'Опубликован' }),
  first: boolean()
    .meta({ label: 'Я сдал(а) экзамен по воождению в ГИБДД с первого раза' }),
  video: string()
    .url('Укажите корректный url адрес')
    .meta({ label: 'Ссылка на видео' })
})

/**
 * Форма отзыва.
 */
export class ReviewFormModel extends BaseDbValidEntity<TReviewFrom> {
  constructor(obj: any = {}) {
    // записываем Ид перс. данных.
    const person = obj.person || {};
    if (person._id) {
      obj.person = person._id;
    }

    super(obj, formSchema)
  }
}
