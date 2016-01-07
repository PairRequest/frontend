import Ember from 'ember';

const experienceLevels = [
  'Beginner', 
  'Intermidiate', 
  'Advanced'
];

export default Ember.Component.extend({
  // TODO: replace this with actual validation
  isValid: true,
  experienceLevels,
  actions: {
    submit() {
      let props = this.getProperties([
        'email', 
        'needHelp',
        'willHelp',
        'code',
        'experience'
      ]);
      if (this.get('isValid')) {
        this['on-submit'](props)
          .then(() => {
            this.set('isReceived', true);
          })
          .catch((errors) => {
            this.set('errors', errors);
          });
      }
    }
  }
});
