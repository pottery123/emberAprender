import Ember from 'ember';

export default Ember.Controller.extend({

work: [],

ajax: Ember.inject.service(),
actions: {
  setLanguage(language){
    this.work.addObject(language)
    console.log(this.work)
  }
}


});










// applicationController: Ember.inject.controller('application'),
// actions: {
//   setLanguage: function(name) {
//     get.get('applicationController').send('setLanguage', name);
//   }
// }
