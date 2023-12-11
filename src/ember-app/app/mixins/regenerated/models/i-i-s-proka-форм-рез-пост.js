import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  наличиеДеф: DS.attr('boolean'),
  статусЗаказа: DS.attr('i-i-s-proka-статус-заказа'),
  удовлКл: DS.attr('i-i-s-proka-удовл-кл'),
  формирРаспред: DS.belongsTo('i-i-s-proka-формир-распред', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-proka-форм-рез-пост.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наличиеДеф: {
    descriptionKey: 'models.i-i-s-proka-форм-рез-пост.validations.наличиеДеф.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статусЗаказа: {
    descriptionKey: 'models.i-i-s-proka-форм-рез-пост.validations.статусЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  удовлКл: {
    descriptionKey: 'models.i-i-s-proka-форм-рез-пост.validations.удовлКл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  формирРаспред: {
    descriptionKey: 'models.i-i-s-proka-форм-рез-пост.validations.формирРаспред.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормРезПостE', 'i-i-s-proka-форм-рез-пост', {
    дата: attr('Дата', { index: 0 }),
    статусЗаказа: attr('Статус заказа', { index: 7 }),
    наличиеДеф: attr('Наличие деф', { index: 8 }),
    удовлКл: attr('Удовл кл', { index: 9 })
  });

  modelClass.defineProjection('ФормРезПостL', 'i-i-s-proka-форм-рез-пост', {
    дата: attr('Дата', { index: 0 }),
    статусЗаказа: attr('Статус заказа', { index: 1 }),
    наличиеДеф: attr('Наличие деф', { index: 2 }),
    удовлКл: attr('Удовл кл', { index: 3 }),
    формирРаспред: belongsTo('i-i-s-proka-формир-распред', 'Номер распред', {
      номерРаспред: attr('Номер распред', { index: 4 }),
      докумПоставки: belongsTo('i-i-s-proka-докум-поставки', '', {
        клиенты: belongsTo('i-i-s-proka-клиенты', '', {
          наимЗаказа: attr('', { index: 5 }),
          пунктПостав: attr('', { index: 6 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
