import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('locations',function(){})
  this.route('location', {path: '/locations/:location_id'})
  this.route('portuguese_words',function(){})
  this.route('login');
});

export default Router;
