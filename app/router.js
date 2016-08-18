import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('locations',function(){})

  this.route('location',   {path: '/locations/:location_id' })

  this.route('language',   {path: '/locations/:id/:language'})

  this.route('languages', {path: '/languages'});
});

export default Router;
