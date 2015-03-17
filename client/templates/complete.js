Template.complete.events({
  'click .js-return': function() {
    Router.go('start');
  },
  'click [data-action="showResults"]': function(event, template) {
    Difference = Duration2 - Duration1;
    IonPopup.show({
      title: 'Results',
      template: 'Exp1: ' + Duration1 + 'ms</br>Exp2: ' + Duration2 + 'ms</br>Diff: ' + Difference+'ms',
      buttons: [{
        text: 'Close me',
        type: 'button-positive',
        onTap: function() {
          IonPopup.close();
        }
      }]
    });
  }
});