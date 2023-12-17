import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колВо: DS.attr('number'),
  ответственный: DS.attr('string'),
  покупатель: DS.attr('string'),
  сумма: DS.attr('number'),
  товар: DS.attr('string'),
  цена: DS.attr('number'),
  клиент: DS.belongsTo('i-i-s-proektirovanie-клиент', { inverse: null, async: false }),
  номенклатура: DS.belongsTo('i-i-s-proektirovanie-номенклатура', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-proektirovanie-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  колВо: {
    descriptionKey: 'models.i-i-s-proektirovanie-продажи.validations.колВо.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  ответственный: {
    descriptionKey: 'models.i-i-s-proektirovanie-продажи.validations.ответственный.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  покупатель: {
    descriptionKey: 'models.i-i-s-proektirovanie-продажи.validations.покупатель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-proektirovanie-продажи.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-proektirovanie-продажи.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-proektirovanie-продажи.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-proektirovanie-продажи.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-proektirovanie-продажи.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-proektirovanie-продажи.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПродажиE', 'i-i-s-proektirovanie-продажи', {
    
  });

  modelClass.defineProjection('ПродажиL', 'i-i-s-proektirovanie-продажи', {
    
  });
};
