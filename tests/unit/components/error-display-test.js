import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('error-display', 'ErrorDisplayComponent');

test('it works', function() {
  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');

  equal(component.$().hasClass('hidden'), true);

  component.set('message', 'test');

  equal(component.$().hasClass('hidden'), false);
});
