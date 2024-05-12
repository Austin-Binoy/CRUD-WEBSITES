const mongoose = require('mongoose');

// Define the schema for Tenant
const tenantSchema = new mongoose.Schema({
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
  }
}, {
  timestamps: true
});

// Create the model
const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
