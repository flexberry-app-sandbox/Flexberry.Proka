import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proka-список-контей', 'Unit | Serializer | i-i-s-proka-список-контей', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proka-список-контей',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proka-ед-изм',
    'transform:i-i-s-proka-статус-заказа',
    'transform:i-i-s-proka-удовл-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
