// routes/jobRoutes.js
import express from 'express';
import { getJobs, getJobById, addJob } from '../Controllers/jobController.js';

const router = express.Router();
router.get('/', getJobs);
router.get('/:id', getJobById);
router.post('/', addJob);
export default router;
