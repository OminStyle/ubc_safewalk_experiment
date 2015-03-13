Template.start.events({
  'click .js-start': function() {
    StartTime = new Date().getTime();
    console.log("Start time: " + StartTime);
    Router.go('signUp');
  }
});