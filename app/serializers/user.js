// import DS from 'ember-data';
import ApplicationAdapter from 'tank-stock/serializers/application';

export default ApplicationAdapter.extend({
  normalize: function ( type, hash, prop ) {
    if ( hash.name ) {
      hash.firstName = hash.name.first;
      hash.lastName  = hash.name.last;

      delete hash.name;
    }

    return this._super( type, hash, prop );
  }
});
