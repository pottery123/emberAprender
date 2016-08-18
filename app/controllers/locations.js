import Ember from 'ember';
export default Ember.Controller.extend({

  number: [],

  ajax: Ember.inject.service(),
  actions: {
    getId(id){
      this.transitionToRoute('language')

      //this.set('model.n', this.get('model.n').addObject(id))
      //this.number.addObject(id)
      //console.log(this.number)

    }
  }


});



//applicationController: Ember.inject.controller('application'),
