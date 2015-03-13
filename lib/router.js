Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', { name: 'start' });

Router.route('/signUp', { name: 'signUp' });

Router.route('/firstrequest', { name: 'firstRequest' });

Router.route('/halfway', { name: 'halfWay' });

Router.route('/secondrequest', { name: 'secondRequest' });

Router.route('/complete', { name: 'complete' });