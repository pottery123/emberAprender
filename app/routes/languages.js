import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
model(params) {
  //let number   = params.id
  //let language = params.language
  //let pageNumber = title || 1
  return this.get('ajax').request('http://localhost:3000/languages' );
  },


queryParams:{
  number:{
    refreshModel: true
    }
  }
});
