import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПродажиMixin
} from '../mixins/regenerated/models/i-i-s-proektirovanie-продажи';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПродажиMixin, Validations, {
});

defineProjections(Model);

export default Model;
