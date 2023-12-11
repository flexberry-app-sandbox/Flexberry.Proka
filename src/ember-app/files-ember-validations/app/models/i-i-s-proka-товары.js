import {
  defineNamespace,
  defineProjections,
  Model as ТоварыMixin
} from '../mixins/regenerated/models/i-i-s-proka-товары';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТоварыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
