import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName:  attr('string'),
  email:     attr('string'),
  password:  attr('string'), // Send only

  systems: DS.hasMany('system', { async: true }),

  time_stamp: attr('date', {
    defaultValue: Date.now
  }),

  fullName: function () {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});
