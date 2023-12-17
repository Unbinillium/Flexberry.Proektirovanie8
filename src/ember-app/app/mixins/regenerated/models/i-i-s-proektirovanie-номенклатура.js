import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  едИзм: DS.attr('string'),
  защСвойства: DS.attr('string'),
  имяТовара: DS.attr('string'),
  экоКласс: DS.attr('string'),
  готТовар: DS.hasMany('i-i-s-proektirovanie-гот-товар', { inverse: 'номенклатура', async: false }),
  запасМатериалов: DS.hasMany('i-i-s-proektirovanie-запас-материалов', { inverse: 'номенклатура', async: false })
});

export let ValidationRules = {
  едИзм: {
    descriptionKey: 'models.i-i-s-proektirovanie-номенклатура.validations.едИзм.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  защСвойства: {
    descriptionKey: 'models.i-i-s-proektirovanie-номенклатура.validations.защСвойства.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  имяТовара: {
    descriptionKey: 'models.i-i-s-proektirovanie-номенклатура.validations.имяТовара.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  экоКласс: {
    descriptionKey: 'models.i-i-s-proektirovanie-номенклатура.validations.экоКласс.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  готТовар: {
    descriptionKey: 'models.i-i-s-proektirovanie-номенклатура.validations.готТовар.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  запасМатериалов: {
    descriptionKey: 'models.i-i-s-proektirovanie-номенклатура.validations.запасМатериалов.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменклатураE', 'i-i-s-proektirovanie-номенклатура', {
    имяТовара: attr('Имя товара', { index: 0 }),
    едИзм: attr('Ед изм', { index: 1 }),
    экоКласс: attr('Эко класс', { index: 2 }),
    защСвойства: attr('Защ свойства', { index: 3 }),
    готТовар: hasMany('i-i-s-proektirovanie-гот-товар', 'Гот товар', {
      товар: attr('Товар', { index: 0 }),
      колВо: attr('Кол во', { index: 1 }),
      одобрено: attr('Одобрено', { index: 2 })
    }),
    запасМатериалов: hasMany('i-i-s-proektirovanie-запас-материалов', 'Запас материалов', {
      товар: attr('Товар', { index: 0 }),
      колВо: attr('Кол во', { index: 1 })
    })
  });

  modelClass.defineProjection('НоменклатураL', 'i-i-s-proektirovanie-номенклатура', {
    имяТовара: attr('Имя товара', { index: 0 }),
    едИзм: attr('Ед изм', { index: 1 }),
    экоКласс: attr('Эко класс', { index: 2 }),
    защСвойства: attr('Защ свойства', { index: 3 })
  });
};
