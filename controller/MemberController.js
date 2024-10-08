const Member = require("../models/MemberSchema");

exports.addMembers = async (req, res) => {
  try {
    const memberData = req.body;
    await Member.create(memberData);
    res.status(200).json({ message: "Member added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add member", error: error.message });
  }
};

exports.updateMembers = async (req, res) => {
  try {
    const memberId = req.params.id;
    const updatedMemberData = req.body;
    const updatedMember = await Member.findByIdAndUpdate(
      memberId,
      updatedMemberData,
      {
        new: true, // Return the updated document
        runValidators: true, // Ensure the updated data is validated against the schema
      }
    );

    if (!updatedMember) {
      return res.status(404).json({ message: "Member not found" });
    }

    res
      .status(200)
      .json({ message: "Member updated successfully", data: updatedMember });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update member", error: error.message });
  }
};

exports.deleteMember = async (req, res) => {
  try {
    const memberId = req.params.id;

    // Find the member by ID and remove it
    const deletedMember = await Member.findByIdAndDelete(memberId);

    if (!deletedMember) {
      return res.status(404).json({ message: "Member not found" });
    }

    res
      .status(200)
      .json({ message: "Member deleted successfully", data: deletedMember });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add member", error: error.message });
  }
};

exports.getMembers = async (req, res) => {
  try {
    const companyId = req.params.company_id;

    // Find all members for the given company_id
    const members = await Member.find({ company_id: companyId });

    if (members.length === 0) {
      return res.status(404).json({ message: "No members found for this company" });
    }

    res.status(200).json({ message: "Members retrieved successfully", data: members });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve members", error: error.message });
  }
};
