import Ember from 'ember';

export default Ember.Controller.extend({
  formIsNotValid: Ember.computed.not('formIsValid'),
  formIsValid:    Ember.computed.and('content.firstName', 'content.lastName', 'content.email', 'passwordIsValid'),

  passwordIsValid: function () {
    return this.get('content.password') === this.get('passwordConfirm');
  }.property('content.password', 'passwordConfirm'),

  _startSignup: function () {
    this.setProperties({
      saving:    true,
      formError: null
    });
  },

  _endSignup: function ( err ) {
    this.setProperties({
      saving: false,
      formError: ( err ) ? ( err.responseText ) ? err.responseText : err : null
    });
  },

  actions: {
    submitSignup: function () {
      this._startSignup();

      var self = this,
          user = this.get('content');

      user.save().then(function ( /* result */ ) {
        self._endSignup();
      }).catch(this._endSignup);
    }
  }
});
