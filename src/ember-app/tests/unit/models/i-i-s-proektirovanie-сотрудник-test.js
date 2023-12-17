import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proektirovanie-сотрудник', 'Unit | Model | i-i-s-proektirovanie-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
