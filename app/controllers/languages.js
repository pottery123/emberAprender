import Ember from 'ember';

export default Ember.Controller.extend({

work: [],

ajax: Ember.inject.service(),
actions: {
      getName(name){
        this.transitionToRoute('locations')
      }

  }


});










// applicationController: Ember.inject.controller('application'),
// actions: {
//   setLanguage: function(name) {
//     get.get('applicationController').send('setLanguage', name);
//   }
// }
