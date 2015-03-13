Template.halfWay.events({
  'click .js-start': function() {
    SecondStartTime = new Date().getTime();
    console.log("Second Start time: " + StartTime);
    Router.go('secondRequest');
  }
});