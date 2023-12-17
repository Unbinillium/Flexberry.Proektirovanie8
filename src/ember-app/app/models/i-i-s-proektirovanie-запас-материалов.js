import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗапасМатериаловMixin
} from '../mixins/regenerated/models/i-i-s-proektirovanie-запас-материалов';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗапасМатериаловMixin, Validations, {
});

defineProjections(Model);

export default Model;
