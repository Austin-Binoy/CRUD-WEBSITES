const mongoose = require('mongoose');

// Define the schema for the Contract
const ContractSchema = new mongoose.Schema({
  contractDate: {
    type: Date,
    required: true
  },
  propertyAddress: {
    type: String,
    required: true
  },
  tenants: {
    type: [String],
    required: true
  },
  landlord: {
    type: String,
    required: true
  },
  feeMonthly: {
    type: Number,
    required: true
  },
  propertyDoorNumber: {
    type: String,
    required: true
  },
  contractLength: {
    type: String,
    enum: ['Month', 'Year', 'Permanent'],
    required: true
  },
  propertyType: {
    type: String,
    enum: ['Apartment', 'Semi-Detached', 'Detached', 'Other'],
    required: true
  },
  otherPropertyType: {
    type: String,
    required: function() {
      return this.propertyType === 'Other';
    }
  }
}, {
  timestamps: true
});

// Create the model
const Contract = mongoose.model('Contract', ContractSchema);

module.exports = Contract;
