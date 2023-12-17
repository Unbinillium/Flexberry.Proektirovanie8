import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ГотТоварMixin
} from '../mixins/regenerated/models/i-i-s-proektirovanie-гот-товар';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ГотТоварMixin, Validations, {
});

defineProjections(Model);

export default Model;
