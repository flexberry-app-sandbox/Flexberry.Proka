import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProkaДокумПоставкиLForm from './forms/i-i-s-proka-докум-поставки-l';
import IISProkaКлиентыLForm from './forms/i-i-s-proka-клиенты-l';
import IISProkaОрганизацияLForm from './forms/i-i-s-proka-организация-l';
import IISProkaПунктПогрузLForm from './forms/i-i-s-proka-пункт-погруз-l';
import IISProkaПунктПогрузкиLForm from './forms/i-i-s-proka-пункт-погрузки-l';
import IISProkaСписокБаржLForm from './forms/i-i-s-proka-список-барж-l';
import IISProkaСписокКонтейLForm from './forms/i-i-s-proka-список-контей-l';
import IISProkaТоварыLForm from './forms/i-i-s-proka-товары-l';
import IISProkaФормРезПостLForm from './forms/i-i-s-proka-форм-рез-пост-l';
import IISProkaФормирРаспредLForm from './forms/i-i-s-proka-формир-распред-l';
import IISProkaДокумПоставкиEForm from './forms/i-i-s-proka-докум-поставки-e';
import IISProkaКлиентыEForm from './forms/i-i-s-proka-клиенты-e';
import IISProkaОрганизацияEForm from './forms/i-i-s-proka-организация-e';
import IISProkaПунктПогрузEForm from './forms/i-i-s-proka-пункт-погруз-e';
import IISProkaПунктПогрузкиEForm from './forms/i-i-s-proka-пункт-погрузки-e';
import IISProkaСписокБаржEForm from './forms/i-i-s-proka-список-барж-e';
import IISProkaСписокКонтейEForm from './forms/i-i-s-proka-список-контей-e';
import IISProkaТоварыEForm from './forms/i-i-s-proka-товары-e';
import IISProkaФормРезПостEForm from './forms/i-i-s-proka-форм-рез-пост-e';
import IISProkaФормирРаспредEForm from './forms/i-i-s-proka-формир-распред-e';
import IISProkaДокумПоставкиModel from './models/i-i-s-proka-докум-поставки';
import IISProkaКлиентыModel from './models/i-i-s-proka-клиенты';
import IISProkaОрганизацияModel from './models/i-i-s-proka-организация';
import IISProkaПунктПогрузModel from './models/i-i-s-proka-пункт-погруз';
import IISProkaПунктПогрузкиModel from './models/i-i-s-proka-пункт-погрузки';
import IISProkaСписокБаржModel from './models/i-i-s-proka-список-барж';
import IISProkaСписокКонтейModel from './models/i-i-s-proka-список-контей';
import IISProkaТЧИнфОЗаказеModel from './models/i-i-s-proka-т-ч-инф-о-заказе';
import IISProkaТоварыModel from './models/i-i-s-proka-товары';
import IISProkaФормРезПостModel from './models/i-i-s-proka-форм-рез-пост';
import IISProkaФормирРаспредModel from './models/i-i-s-proka-формир-распред';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proka-докум-поставки': IISProkaДокумПоставкиModel,
    'i-i-s-proka-клиенты': IISProkaКлиентыModel,
    'i-i-s-proka-организация': IISProkaОрганизацияModel,
    'i-i-s-proka-пункт-погруз': IISProkaПунктПогрузModel,
    'i-i-s-proka-пункт-погрузки': IISProkaПунктПогрузкиModel,
    'i-i-s-proka-список-барж': IISProkaСписокБаржModel,
    'i-i-s-proka-список-контей': IISProkaСписокКонтейModel,
    'i-i-s-proka-т-ч-инф-о-заказе': IISProkaТЧИнфОЗаказеModel,
    'i-i-s-proka-товары': IISProkaТоварыModel,
    'i-i-s-proka-форм-рез-пост': IISProkaФормРезПостModel,
    'i-i-s-proka-формир-распред': IISProkaФормирРаспредModel
  },

  'application-name': 'Proka',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proka',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proka',
          title: 'Proka'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        proka: {
          caption: 'Proka',
          title: 'Proka',
          'i-i-s-proka-формир-распред-l': {
            caption: 'Формир распред',
            title: ''
          },
          'i-i-s-proka-список-контей-l': {
            caption: 'Список контей',
            title: ''
          },
          'i-i-s-proka-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-proka-форм-рез-пост-l': {
            caption: 'Форм рез пост',
            title: ''
          },
          'i-i-s-proka-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-proka-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-proka-пункт-погрузки-l': {
            caption: 'Пункт погрузки',
            title: ''
          },
          'i-i-s-proka-докум-поставки-l': {
            caption: 'Докум поставки',
            title: ''
          },
          'i-i-s-proka-пункт-погруз-l': {
            caption: 'Пункт погруз',
            title: ''
          },
          'i-i-s-proka-список-барж-l': {
            caption: 'Список барж',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proka-докум-поставки-l': IISProkaДокумПоставкиLForm,
    'i-i-s-proka-клиенты-l': IISProkaКлиентыLForm,
    'i-i-s-proka-организация-l': IISProkaОрганизацияLForm,
    'i-i-s-proka-пункт-погруз-l': IISProkaПунктПогрузLForm,
    'i-i-s-proka-пункт-погрузки-l': IISProkaПунктПогрузкиLForm,
    'i-i-s-proka-список-барж-l': IISProkaСписокБаржLForm,
    'i-i-s-proka-список-контей-l': IISProkaСписокКонтейLForm,
    'i-i-s-proka-товары-l': IISProkaТоварыLForm,
    'i-i-s-proka-форм-рез-пост-l': IISProkaФормРезПостLForm,
    'i-i-s-proka-формир-распред-l': IISProkaФормирРаспредLForm,
    'i-i-s-proka-докум-поставки-e': IISProkaДокумПоставкиEForm,
    'i-i-s-proka-клиенты-e': IISProkaКлиентыEForm,
    'i-i-s-proka-организация-e': IISProkaОрганизацияEForm,
    'i-i-s-proka-пункт-погруз-e': IISProkaПунктПогрузEForm,
    'i-i-s-proka-пункт-погрузки-e': IISProkaПунктПогрузкиEForm,
    'i-i-s-proka-список-барж-e': IISProkaСписокБаржEForm,
    'i-i-s-proka-список-контей-e': IISProkaСписокКонтейEForm,
    'i-i-s-proka-товары-e': IISProkaТоварыEForm,
    'i-i-s-proka-форм-рез-пост-e': IISProkaФормРезПостEForm,
    'i-i-s-proka-формир-распред-e': IISProkaФормирРаспредEForm
  },

});

export default translations;
