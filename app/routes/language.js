import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
model(params) {
  let number = params.id
  console.log(number)

 let result = this.get('ajax').request('http://localhost:3000/languages/' + number)
 return result

},


queryParams:{
  number:{
    refreshModel: true
    }
  }
});
