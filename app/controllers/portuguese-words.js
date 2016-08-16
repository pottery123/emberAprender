import Ember from 'ember';

export default Ember.Controller.extend({

  ajax: Ember.inject.service(),
  actions: {
    hideWord(){
    //let a =  document.getElementByIdEmber.$("portugueseFlashcard");
      console.log(document.getElementByIdEmber.$('englishFlashcard'))


    },
  }

  });
