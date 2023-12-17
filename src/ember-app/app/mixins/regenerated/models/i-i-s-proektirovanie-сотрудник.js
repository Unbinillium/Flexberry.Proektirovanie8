import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  оклад: DS.attr('number'),
  отдел: DS.attr('string'),
  тел: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-proektirovanie-сотрудник.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оклад: {
    descriptionKey: 'models.i-i-s-proektirovanie-сотрудник.validations.оклад.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отдел: {
    descriptionKey: 'models.i-i-s-proektirovanie-сотрудник.validations.отдел.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тел: {
    descriptionKey: 'models.i-i-s-proektirovanie-сотрудник.validations.тел.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-proektirovanie-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-proektirovanie-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    отдел: attr('Отдел', { index: 2 }),
    оклад: attr('Оклад', { index: 3 }),
    тел: attr('Тел', { index: 4 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-proektirovanie-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    отдел: attr('Отдел', { index: 2 }),
    оклад: attr('Оклад', { index: 3 }),
    тел: attr('Тел', { index: 4 })
  });
};
