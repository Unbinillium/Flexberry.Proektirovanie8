import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProektirovanie_КлиентLForm from './forms/i-i-s-proektirovanie-клиент-l';
import IISProektirovanie_НоменклатураLForm from './forms/i-i-s-proektirovanie-номенклатура-l';
import IISProektirovanie_ПеремещениеLForm from './forms/i-i-s-proektirovanie-перемещение-l';
import IISProektirovanie_ПоставщикLForm from './forms/i-i-s-proektirovanie-поставщик-l';
import IISProektirovanie_ПродажиLForm from './forms/i-i-s-proektirovanie-продажи-l';
import IISProektirovanie_СотрудникLForm from './forms/i-i-s-proektirovanie-сотрудник-l';
import IISProektirovanie_КлиентEForm from './forms/i-i-s-proektirovanie-клиент-e';
import IISProektirovanie_НоменклатураEForm from './forms/i-i-s-proektirovanie-номенклатура-e';
import IISProektirovanie_ПеремещениеEForm from './forms/i-i-s-proektirovanie-перемещение-e';
import IISProektirovanie_ПоставщикEForm from './forms/i-i-s-proektirovanie-поставщик-e';
import IISProektirovanie_ПродажиEForm from './forms/i-i-s-proektirovanie-продажи-e';
import IISProektirovanie_СотрудникEForm from './forms/i-i-s-proektirovanie-сотрудник-e';
import IISProektirovanie_ГотТоварModel from './models/i-i-s-proektirovanie-гот-товар';
import IISProektirovanie_ЗапасМатериаловModel from './models/i-i-s-proektirovanie-запас-материалов';
import IISProektirovanie_КлиентModel from './models/i-i-s-proektirovanie-клиент';
import IISProektirovanie_НоменклатураModel from './models/i-i-s-proektirovanie-номенклатура';
import IISProektirovanie_ПеремещениеModel from './models/i-i-s-proektirovanie-перемещение';
import IISProektirovanie_ПоставщикModel from './models/i-i-s-proektirovanie-поставщик';
import IISProektirovanie_ПродажиModel from './models/i-i-s-proektirovanie-продажи';
import IISProektirovanie_СотрудникModel from './models/i-i-s-proektirovanie-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proektirovanie-гот-товар': IISProektirovanie_ГотТоварModel,
    'i-i-s-proektirovanie-запас-материалов': IISProektirovanie_ЗапасМатериаловModel,
    'i-i-s-proektirovanie-клиент': IISProektirovanie_КлиентModel,
    'i-i-s-proektirovanie-номенклатура': IISProektirovanie_НоменклатураModel,
    'i-i-s-proektirovanie-перемещение': IISProektirovanie_ПеремещениеModel,
    'i-i-s-proektirovanie-поставщик': IISProektirovanie_ПоставщикModel,
    'i-i-s-proektirovanie-продажи': IISProektirovanie_ПродажиModel,
    'i-i-s-proektirovanie-сотрудник': IISProektirovanie_СотрудникModel
  },

  'application-name': 'Proektirovanie_',

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
        'application-name': 'Proektirovanie_',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proektirovanie_',
          title: 'Proektirovanie_'
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
        'учет-материалов': {
          caption: 'Учет материалов',
          title: 'Учет материалов',
          'i-i-s-proektirovanie-продажи-l': {
            caption: 'Продажи',
            title: ''
          },
          'i-i-s-proektirovanie-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-proektirovanie-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-proektirovanie-перемещение-l': {
            caption: 'Перемещение',
            title: ''
          },
          'i-i-s-proektirovanie-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-proektirovanie-поставщик-l': {
            caption: 'Поставщик',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-proektirovanie-поставщик-l': {
            caption: 'ПоставщикL',
            title: 'Поставщик'
          },
          'i-i-s-proektirovanie-сотрудник-l': {
            caption: 'СотрудникL',
            title: 'Сотрудник'
          },
          'i-i-s-proektirovanie-номенклатура-l': {
            caption: 'НоменклатураL',
            title: 'Номенклатура'
          },
          'i-i-s-proektirovanie-клиент-l': {
            caption: 'КлиентL',
            title: 'Клиент'
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-proektirovanie-перемещение-l': {
            caption: 'ПеремещениеL',
            title: 'Перемещение'
          },
          'i-i-s-proektirovanie-продажи-l': {
            caption: 'ПродажиL',
            title: 'Продажи'
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
    'i-i-s-proektirovanie-клиент-l': IISProektirovanie_КлиентLForm,
    'i-i-s-proektirovanie-номенклатура-l': IISProektirovanie_НоменклатураLForm,
    'i-i-s-proektirovanie-перемещение-l': IISProektirovanie_ПеремещениеLForm,
    'i-i-s-proektirovanie-поставщик-l': IISProektirovanie_ПоставщикLForm,
    'i-i-s-proektirovanie-продажи-l': IISProektirovanie_ПродажиLForm,
    'i-i-s-proektirovanie-сотрудник-l': IISProektirovanie_СотрудникLForm,
    'i-i-s-proektirovanie-клиент-e': IISProektirovanie_КлиентEForm,
    'i-i-s-proektirovanie-номенклатура-e': IISProektirovanie_НоменклатураEForm,
    'i-i-s-proektirovanie-перемещение-e': IISProektirovanie_ПеремещениеEForm,
    'i-i-s-proektirovanie-поставщик-e': IISProektirovanie_ПоставщикEForm,
    'i-i-s-proektirovanie-продажи-e': IISProektirovanie_ПродажиEForm,
    'i-i-s-proektirovanie-сотрудник-e': IISProektirovanie_СотрудникEForm
  },

});

export default translations;
