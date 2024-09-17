const Job = require("../models/job");

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (error) {
    console.log(error.message);
  }
};

const createJob = async (req, res) => {
  const {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = req.body;
  try {
    const job = await Job.create({
      company,
      logo,
      isNew,
      featured,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllJobs, createJob };
