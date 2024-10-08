const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    emp_name: { type: String, required: true },
    emp_designation: { type: String, required: true },
    emp_profile: { type: String, required: true },
    linkedinLink: { type: String, required: false },
  }, { collection: 'team_members' });

  module.exports = mongoose.model('Member', memberSchema)