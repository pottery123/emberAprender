import DS from 'ember-data';

export default DS.Model.extend({

  portuguese_words: DS.attr(),
  locationType: DS.attr('string'),


});
