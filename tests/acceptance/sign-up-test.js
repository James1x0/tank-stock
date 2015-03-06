import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: SignUp', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /sign-up', function() {
  visit('/sign-up');

  andThen(function() {
    equal(currentPath(), 'sign-up');
    var $signupForm = find('form.sign-up');
    equal($signupForm.length, 1);
  });
});
