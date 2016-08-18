import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('language_locations',   {path: '/languages/:language_id/locations'})

  this.route('language_location',    {path: '/languages/:language_id/locations/:id' })


  this.route('languages',            {path: '/languages'})

  this.route('language',             {path: '/languages/:id'});
});

export default Router;
