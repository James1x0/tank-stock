import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name:        attr('string'),
  description: attr('string'),
  volume:      attr('number'),
  marine:      attr('boolean'),

  readings:  DS.hasMany('reading', { async: true }),
  livestock: DS.hasMany('livestock', { async: true }),
  notes:     DS.hasMany('note', { async: true }),
  user:      DS.belongsTo('user'),

  time_stamp: attr('date', {
    defaultValue: Date.now
  })
});
