const Team = require("../models/teamSchema");

exports.updateTeams = async (req, res) => {
  try {
    const companyId = req.params.company_id;
    const { companyProfile, website, vision, memberData } = req.body;
    console.log(companyId, companyProfile, website, vision, memberData);
    // Find team by company_id and update the details
    const updatedTeam = await Team.findOneAndUpdate(
      { company_id: companyId },
      {
        companyProfile,
        website,
        vision,
        memberData, // Will replace the entire member array
      },
      { new: true, runValidators: true } // Return the updated document and validate inputs
    );

    if (!updatedTeam) {
      return res
        .status(404)
        .json({ message: "Team not found for the given company_id" });
    }

    res
      .status(200)
      .json({ message: "Team updated successfully", data: updatedTeam });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update team", error: error.message });
  }
};

exports.createTeam = async (req, res) =>{
  try {
    const companyId = req.params.company_id;
    const { companyProfile, website, vision, memberData } = req.body;
    console.log(companyId, companyProfile, website, vision, memberData);
    // Find team by company_id and update the details
    const updatedTeam = await Team.create(req.body);

    // if (!updatedTeam) {
    //   return res
    //     .status(404)
    //     .json({ message: "Team not found for the given company_id" });
    // }

    res
      .status(200)
      .json({ message: "Team created successfully", data: updatedTeam });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update team", error: error.message });
  }
} 

exports.getTeam = async (req, res) => {
  try {
    const companyId = req.params.company_id;

    const team = await Team.find({ company_id: companyId });
    if (team.length === 0) {
      return res.status(404).json({ message: "No Data" });
    }

    res
      .status(200)
      .json({ message: "Data retrieved successfully", data: team[0] });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieved data", error: error.message });
  }
};
