const express = require("express");
const {
  getAllJobs,
  createJob,
  getSingleJob,
} = require("../controllers/jobController");
const router = express.Router();

// Get all jobs
router.get("/all-jobs", getAllJobs);

// Get a single job by ID
router.get("/get-single-job/:id", getSingleJob);

// Create a new job
router.post("/create-job", createJob);

// Delete a single job by ID
router.delete("/delete-single-job/:id", (req, res) => {
  // Handler code here
});

// Update a job by ID
router.put("/update-job/:id", (req, res) => {
  // Handler code here
});

module.exports = router;
