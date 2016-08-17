import Ember from 'ember';

export default Ember.Route.extend({
  //applicationController: Ember.inject.controller('application'),
  ajax: Ember.inject.service(),
model(params) {
  let number = params.location_id
  let language = this.get('applicationController').get("languageName")
  //let pageNumber = title || 1
  return this.get('ajax').request('http://localhost:3000/locations/' + number + '/' + language );
},

queryParams:{
  number:{
    refreshModel: true
    }
  }
});
