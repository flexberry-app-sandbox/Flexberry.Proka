import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proka-форм-рез-пост', 'Unit | Model | i-i-s-proka-форм-рез-пост', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proka-докум-поставки',
    'model:i-i-s-proka-клиенты',
    'model:i-i-s-proka-организация',
    'model:i-i-s-proka-пункт-погруз',
    'model:i-i-s-proka-пункт-погрузки',
    'model:i-i-s-proka-список-барж',
    'model:i-i-s-proka-список-контей',
    'model:i-i-s-proka-т-ч-инф-о-заказе',
    'model:i-i-s-proka-товары',
    'model:i-i-s-proka-форм-рез-пост',
    'model:i-i-s-proka-формир-распред',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
