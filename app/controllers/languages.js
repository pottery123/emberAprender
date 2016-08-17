import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  actions: {
    setLanguage: function(name) {
      this.get('applicationController').send('setLanguage', name);
    }
  }
});
