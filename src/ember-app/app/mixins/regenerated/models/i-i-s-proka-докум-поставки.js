import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДог: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-proka-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-proka-организация', { inverse: null, async: false }),
  тЧИнфОЗаказе: DS.hasMany('i-i-s-proka-т-ч-инф-о-заказе', { inverse: 'докумПоставки', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-proka-докум-поставки.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДог: {
    descriptionKey: 'models.i-i-s-proka-докум-поставки.validations.номерДог.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-proka-докум-поставки.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proka-докум-поставки.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧИнфОЗаказе: {
    descriptionKey: 'models.i-i-s-proka-докум-поставки.validations.тЧИнфОЗаказе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумПоставкиE', 'i-i-s-proka-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номерДог: attr('Номер дог', { index: 1 }),
    клиенты: belongsTo('i-i-s-proka-клиенты', 'Клиенты', {
      наимЗаказа: attr('Наим заказа', { index: 3, hidden: true }),
      пунктПостав: attr('', { index: 4 })
    }, { index: 2, displayMemberPath: 'наимЗаказа' }),
    организация: belongsTo('i-i-s-proka-организация', 'Организация', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' }),
    тЧИнфОЗаказе: hasMany('i-i-s-proka-т-ч-инф-о-заказе', 'Т ч инф о заказе', {
      товары: belongsTo('i-i-s-proka-товары', 'Товары', {
        наимТовара: attr('Наим товара', { index: 1, hidden: true }),
        едИзм: attr('', { index: 3 }),
        цена: attr('', { index: 4 })
      }, { index: 0, displayMemberPath: 'наимТовара' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ДокумПоставкиL', 'i-i-s-proka-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номерДог: attr('Номер дог', { index: 1 }),
    клиенты: belongsTo('i-i-s-proka-клиенты', 'Наим заказа', {
      наимЗаказа: attr('Наим заказа', { index: 2 }),
      пунктПостав: attr('', { index: 3 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-proka-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
