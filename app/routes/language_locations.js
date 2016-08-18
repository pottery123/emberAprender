import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model(params) {
    console.log(params)
  let language_id = params.language_id
  let resuts =   this.get('ajax').request('http://localhost:3000/languages/' + language_id +'/locations');
  console.log(resuts)
    return resuts.data
  },

queryParams:{
  number:{
    refreshModel: true
    }
  }
});
