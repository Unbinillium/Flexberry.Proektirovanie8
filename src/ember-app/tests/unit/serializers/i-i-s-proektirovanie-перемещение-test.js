import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proektirovanie-перемещение', 'Unit | Serializer | i-i-s-proektirovanie-перемещение', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proektirovanie-перемещение',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-proektirovanie-гот-товар',
    'model:i-i-s-proektirovanie-запас-материалов',
    'model:i-i-s-proektirovanie-клиент',
    'model:i-i-s-proektirovanie-номенклатура',
    'model:i-i-s-proektirovanie-перемещение',
    'model:i-i-s-proektirovanie-поставщик',
    'model:i-i-s-proektirovanie-продажи',
    'model:i-i-s-proektirovanie-сотрудник',
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
