// controllers/jobController.js
import Job from '../Models/Job.js';

export const getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

export const getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
};

export const addJob = async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
};
