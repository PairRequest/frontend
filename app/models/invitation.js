import DS from 'ember-data';

const {
  attr
} = DS;

export default DS.Model.extend({
  email: attr(),
  needHelp: attr('boolean'),
  willHelp: attr('boolean'),
  experience: attr(),
  code: attr()
});
