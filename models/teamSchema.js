const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true }, // Reference to Company
    companyProfile: { type: String, required: true },
    website: { type: String, required: true },
    vision: { type: String, required: true },
    memberData: [{
      emp_name: { type: String, required: true },
      emp_designation: { type: String, required: true },
      emp_profile: { type: String, required: true },
      linkedinLink: { type: String, required: false },
    }],
  }, { collection: 'team_info' });

  module.exports = mongoose.model('Team', TeamSchema)