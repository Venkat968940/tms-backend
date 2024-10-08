const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    postcode: { type: String, required: true },
    countryCode: { type: String, required: true },
    mobile: { type: String, required: true },
    website: { type: String, required: true },
    personName: { type: String, required: true },
    designation: { type: String, required: true },
    personCountryCode: { type: String, required: true },
    personNumber: { type: String, required: true },
    email: { type: String, required: true },
    companyLogo: { type: Array, required: false },
  }, { collection: 'companyinfo' }); // Explicitly set collection name
  

module.exports = mongoose.model('Company', CompanySchema);
