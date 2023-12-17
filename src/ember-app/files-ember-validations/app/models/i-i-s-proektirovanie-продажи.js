import {
  defineNamespace,
  defineProjections,
  Model as ПродажиMixin
} from '../mixins/regenerated/models/i-i-s-proektirovanie-продажи';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПродажиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
