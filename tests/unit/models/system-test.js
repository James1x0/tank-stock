import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('system', 'System', {
  // Specify the other units that are required for this test.
  needs: [
    'model:user',
    'model:reading',
    'model:livestock',
    'model:note'
  ]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
