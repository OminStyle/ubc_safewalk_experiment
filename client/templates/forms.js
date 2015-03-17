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
      Duration1 = EndTime - FirstStartTime;
      console.log("Experiment duration: " + Duration1);
      //Measurements.insert({
      //  duration1: Duration1
      //});
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
      Duration2 = SecondEndTime - SecondStartTime;
      console.log("Experiment duration: " + Duration2);
      //Measurements.insert({
      //  duration2: Duration2
      //});
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