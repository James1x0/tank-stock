import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'bubble-box' ],

  _renderBubbles: function () {
    var $this      = this.$(),
        $container = $this.find('.bubble-animation-frame');

    var rand = function ( min, max ) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    //$.Velocity.defaults.easing = 'easeInOutsine';

    var containerHeight = $this.height(),
        containerWidth  = $this.width();

    var totalBubbles     = Math.floor( containerWidth / 60 ),
        bubblesHtml      = '',
        $bubbleContainer = $container.find('.bubble-container'),
        bubbleSpacing    = containerWidth / totalBubbles;

    for ( var i = 0; i < totalBubbles; i++ ) {
      bubblesHtml += '<div class="bubble"></div>';
    }

    var $bubbles = $( bubblesHtml );

    $bubbleContainer.html( $bubbles );

    $bubbles = $bubbles.appendTo( $bubbleContainer );

    var _animate = function () {
      $bubbles.velocity({ 
        translateX: [
          function ( i ) {
            return i * bubbleSpacing;
          },
          function ( i ) {
            return i * ( bubbleSpacing * 1.01 );
          }
        ],
        translateY: [
          function () {
            return rand(containerHeight / 3, 0);
          },
          containerHeight - 10
        ],
        opacity: [
          function () {
            return rand(0, 0.3);
          },
          function () {
            return rand(0, 1);
          }
        ],
        scale: [
          function () {
            return rand(0.8, 1.8);
          },
          0
        ]
      }, { duration: 4000, ease: 'ease-in', complete: _animate });
    };

    _animate();
  }.on('didInsertElement')
});
