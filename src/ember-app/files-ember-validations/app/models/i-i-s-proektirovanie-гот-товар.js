import {
  defineNamespace,
  defineProjections,
  Model as ГотТоварMixin
} from '../mixins/regenerated/models/i-i-s-proektirovanie-гот-товар';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГотТоварMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
