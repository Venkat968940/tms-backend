const Products = require("../models/ProductSchema");
const Member = require("../models/MemberSchema");
const Team = require("../models/teamSchema");

const Company = require("../models/CompanySchema"); // Import the Company model

exports.getCompany = async (req, res) => {
  try {
    const companyId = req.params.company_id;

    const company = await Company.find({ _id: companyId });
    if (company.length === 0) {
      return res.status(404).json({ message: "No Data" });
    }
    res
      .status(200)
      .json({ message: "Data retrieved successfully", data: company[0] });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to get company", error: error.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const company = await Company.find();
    if (company.length === 0) {
      return res.status(404).json({ message: "No Data" });
    }
    res
      .status(200)
      .json({ message: "Data retrieved successfully", data: company });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to get company", error: error.message });
  }
};

exports.addCompany = async (req, res) => {
  try {
    const companyData = req.body;
    const newCompany = await Company.create(companyData);
    res
      .status(201)
      .json({ message: "Company added successfully", data: newCompany });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add company", error: error.message });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const companyId = req.params.company_id;
    const updatedCompanyData = req.body;

    const updatedCompany = await Company.findByIdAndUpdate(
      companyId,
      updatedCompanyData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }

    res
      .status(200)
      .json({ message: "Company updated successfully", data: updatedCompany });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update company", error: error.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const deletedCompany = await Company.findByIdAndDelete(companyId);
    // Delete related documents from Team, Member, and Products collections
    const deleteTeam = await Team.deleteMany({ company_id: companyId });
    const deleteMember = await Member.deleteMany({ company_id: companyId });
    const deleteProduct = await Products.deleteMany({ company_id: companyId });
    if (!deletedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }

    res
      .status(200)
      .json({ message: "Company deleted successfully", data: deletedCompany });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete company", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, mobile } = req.body;

    const findByEmail = await Company.findOne({ email: email, mobile : mobile });
    if (!findByEmail) {
      return res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "Logged In Successfully", data: findByEmail });
  } catch (error) {
    res.status(500).json({ message: "Failed to Login", error: error.message });
  }
};
