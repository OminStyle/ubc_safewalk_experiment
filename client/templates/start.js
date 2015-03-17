Template.start.events({
  'click .js-start': function() {
    FirstStartTime = new Date().getTime();
    console.log("Start time: " + FirstStartTime);
    Router.go('signUp');
  }
});