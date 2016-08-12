import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
model(params) {
  let number = params.location_id
  //let pageNumber = title || 1
  return this.get('ajax').request('http://localhost:3000/locations/' + number);
},

queryParams:{
  number:{
    refreshModel: true
  }
}
});
