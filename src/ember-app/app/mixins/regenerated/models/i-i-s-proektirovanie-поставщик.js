import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  иНН: DS.attr('string'),
  регион: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-proektirovanie-поставщик.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-proektirovanie-поставщик.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  регион: {
    descriptionKey: 'models.i-i-s-proektirovanie-поставщик.validations.регион.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-proektirovanie-поставщик.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПоставщикE', 'i-i-s-proektirovanie-поставщик', {
    фИО: attr('ФИО', { index: 0 }),
    регион: attr('Регион', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    иНН: attr('ИНН', { index: 3 })
  });

  modelClass.defineProjection('ПоставщикL', 'i-i-s-proektirovanie-поставщик', {
    фИО: attr('ФИО', { index: 0 }),
    регион: attr('Регион', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    иНН: attr('ИНН', { index: 3 })
  });
};
