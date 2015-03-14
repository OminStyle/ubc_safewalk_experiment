Profiles = new Mongo.Collection("profile");
Profiles.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  phoneNumber: {
    type: String,
    label: "Phone Number"
  },
  studentNumber: {
    type: Number,
    label: "Student Number",
    min: 1,
    max: 999999999
  }
}));

Requests = new Mongo.Collection("request");
Requests.attachSchema(new SimpleSchema({
  pickupLocation: {
    type: String,
    label: "Pick-up Location",
    max: 200,
  },
  destination: {
    type: String,
    label: "Destination"
  },
  time: {
    type: String,
    label: "Time",
    autoform: {
      afFieldInput: {
        type: "time"
      }
    }
  },
  notes: {
    type: String,
    label: "Additional Notes",
    optional: true
  }
}));

Measurements = new Mongo.Collection("measurements");