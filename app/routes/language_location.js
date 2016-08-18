import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
model(params) {
  //let number = params.location_id
  let language_id = params.language_id
  let id = params.locations_id
  //let language = this.get('applicationController').get("languageName")
  //let pageNumber = title || 1
  return this.get('ajax').request('http://localhost:3000/languages/' + language_id +'/locations/' + id);
},

queryParams:{
  number:{
    refreshModel: true
    }
  }
});
