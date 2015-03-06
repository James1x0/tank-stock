import Growl from 'tank-stock/services/growl';

export function initialize ( container, application ) {
  application.register('service:growl', Growl.extend(), { singleton: true });
  application.inject('route', 'growl', 'service:growl');
  application.inject('controller', 'growl', 'service:growl');
}

export default {
  name: 'growl-service',
  initialize: initialize
};
