import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колВо: DS.attr('number'),
  ответственный: DS.attr('string'),
  продавец: DS.attr('string'),
  сумма: DS.attr('number'),
  товар: DS.attr('string'),
  цена: DS.attr('number'),
  номенклатура: DS.belongsTo('i-i-s-proektirovanie-номенклатура', { inverse: null, async: false }),
  поставщик: DS.belongsTo('i-i-s-proektirovanie-поставщик', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-proektirovanie-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  колВо: {
    descriptionKey: 'models.i-i-s-proektirovanie-перемещение.validations.колВо.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  ответственный: {
    descriptionKey: 'models.i-i-s-proektirovanie-перемещение.validations.ответственный.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  продавец: {
    descriptionKey: 'models.i-i-s-proektirovanie-перемещение.validations.продавец.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-proektirovanie-перемещение.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-proektirovanie-перемещение.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-proektirovanie-перемещение.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-proektirovanie-перемещение.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  поставщик: {
    descriptionKey: 'models.i-i-s-proektirovanie-перемещение.validations.поставщик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-proektirovanie-перемещение.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПеремещениеE', 'i-i-s-proektirovanie-перемещение', {
    
  });

  modelClass.defineProjection('ПеремещениеL', 'i-i-s-proektirovanie-перемещение', {
    
  });
};
