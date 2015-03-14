AutoForm.setDefaultTemplate('ionic');

AutoForm.hooks({
  'profile-new-form': {
    onSuccess: function (operation, result, template) {
      Router.go('firstRequest');
    },
    onSubmit: function (doc) {
      this.done();
      return false;
    }
  },
  'first-request-new-form': {
    onSuccess: function (operation, result, template) {
      EndTime = new Date().getTime();
      console.log("End time: " + EndTime);
      var duration = EndTime - StartTime;
      console.log("Experiment duration: " + duration);
      Measurements.insert({
        duration: duration
      });
      Router.go('halfWay');
    },
    onSubmit: function (doc) {
      this.done();
      return false;
    }
  },
  'second-request-new-form': {
    onSuccess: function (operation, result, template) {
      SecondEndTime = new Date().getTime();
      console.log("End time: " + SecondEndTime);
      var duration = SecondEndTime - SecondStartTime;
      console.log("Experiment duration: " + duration);
      Measurements.insert({
        duration: duration
      });
      Router.go('complete');
    },
    onSubmit: function (doc) {
      this.done();
      return false;
    }
  }
});

function stopRKey(evt) {
  var evt = (evt) ? evt : ((event) ? event : null);
  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;}
}

document.onkeypress = stopRKey;