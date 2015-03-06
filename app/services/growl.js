import Ember from 'ember';

/* Simple growl wrapper for fuss-free alerting */

export default Ember.Object.extend({
  growl: function ( type, title, msg, delay, icon ) {
    console.debug('Growling it up', arguments);

    icon  = ( icon ) ? icon : ( type === 'danger' ) ? 'fa fa-times-circle' : ( type === 'warning' ) ? 'fa fa-exclamation-triangle' : ( type === 'info' ) ? 'fa fa-info-circle' : 'fa fa-envelope';
    delay = ( delay === undefined ) ? 4000 : delay;
    title = ' <strong>' + title + '</strong><br />';

    $.growl({
      icon: icon,
      title: title,
      message: msg
    }, {
      type: type,
      delay: delay,
      placement: {
        align: 'center'
      },
      z_index: 1060
    });
  },

  // Aliases
  danger: function ( msg, title ) {
    this.growl( 'danger', title || 'Error:', msg, 0 );
  },

  warning: function ( msg, title ) {
    this.growl( 'warning', title || 'Warning:', msg, 0 );
  },

  info: function ( msg, title ) {
    this.growl( 'info', title || 'Info:', msg, 0 );
  }
});
