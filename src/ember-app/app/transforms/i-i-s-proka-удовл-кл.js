import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УдовлКлEnum from '../enums/i-i-s-proka-удовл-кл';

export default FlexberryEnum.extend({
  enum: УдовлКлEnum,
  sourceType: 'IIS.Proka.УдовлКл'
});
