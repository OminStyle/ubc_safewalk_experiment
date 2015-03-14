Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', { name: 'start' });

Router.route('/sign-up', { name: 'signUp' });

Router.route('/first-request', { name: 'firstRequest' });

Router.route('/half-way', { name: 'halfWay' });

Router.route('/second-request', { name: 'secondRequest' });

Router.route('/complete', { name: 'complete' });

if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({ v: '3', key: 'AIzaSyCDJJPYVO5DgvSP5a8Os-Jmyzpplukyua4', libraries: 'places' });
  });
}