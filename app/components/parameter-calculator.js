import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'parameter-calculator' ],

  // Computed
  waterReplaced: function () {
    var d = this.getProperties('volume', 'volumeChanges', 'numberChanges');

    if ( !d.volume || !d.volumeChanges || !d.numberChanges ) {
      return;
    }

    var tVolume = d.volumeChanges * d.numberChanges,
        pVolume = Math.round( ( tVolume / d.volume ) * 100 );

    return tVolume + 'gal / ' + pVolume + '%';
  }.property('volume', 'volumeChanges', 'numberChanges'),

  newParameterLevel: function () {
    var d = this.getProperties('volume', 'volumeChanges', 'numberChanges', 'parameterLevel');

    if ( !d.volume || !d.volumeChanges || !d.numberChanges || !d.parameterLevel ) {
      return;
    }

    var level       = d.parameterLevel,
        pTankVolume = d.volumeChanges / d.volume;

    for ( var i = 0; i < d.numberChanges; i++ ) {
      level = level - ( level * pTankVolume );
    }

    return level.toFixed(2);
  }.property('volume', 'volumeChanges', 'numberChanges', 'parameterLevel'),

  parameterReduction: function () {
    var d = this.getProperties('newParameterLevel', 'parameterLevel');

    if ( !d.newParameterLevel || !d.parameterLevel ) {
      return;
    }

    var difference = d.parameterLevel - d.newParameterLevel;

    return Math.round( ( difference / d.parameterLevel ) * 100 );
  }.property('newParameterLevel', 'parameterLevel')
});
