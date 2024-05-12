const mongoose = require('mongoose');

// Define the schema for Landlord
const landlordSchema = new mongoose.Schema({
  title: {
    type: String,
    enum: ['Mx', 'Ms', 'Mr', 'Mrs', 'Miss', 'Dr', 'Other'],
    required: true
  },
  otherTitle: {
    type: String,
    required: function() {
      return this.title === 'Other';
    }
  },
  firstName: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  },
  homeAddress: {
    addressLine1: {
      type: String,
      required: true
    },
    addressLine2: {
      type: String
    },
    town: {
      type: String,
      required: true
    },
    countyOrCity: {
      type: String,
      required: true
    },
    eircode: {
      type: String
    }
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  permissionToRent: {
    type: Boolean,
    enum: ['Y', 'N'],
    required: true
  },
  permissionToContactViaEmail: {
    type: Boolean,
    enum: ['Y', 'N'],
    required: true
  }
}, {
  timestamps: true
});

// Create the model
const Landlord = mongoose.model('Landlord', landlordSchema);

module.exports = Landlord;
