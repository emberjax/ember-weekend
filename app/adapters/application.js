import DS from 'ember-data';
import config from 'ember-weekend/config/environment';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host: config.apiHost
});
