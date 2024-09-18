const mongoose = require("mongoose");

const { Schema } = mongoose;

const jobSchema = Schema({
  company: { type: String, required: true },
  logo: { type: String, required: true },
  isNew: { type: Boolean, required: true },
  featured: { type: Boolean, required: true },
  position: { type: String, required: true },
  role: { type: String, required: true },
  level: { type: String, required: true },
  postedAt: { type: Date, default: Date.now, required: true },
  contract: { type: String, required: true },
  location: { type: String, required: true },
  languages: { type: [String], required: true },
  tools: { type: [String], default: [] },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
