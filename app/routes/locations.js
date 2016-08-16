import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model(params) {
  console.log(params)
  return this.get('ajax').request('https://aprenderapi.herokuapp.com/locations/');
},

queryParams:{
  locationType:{
    refreshModel: true
    }
  }
});
