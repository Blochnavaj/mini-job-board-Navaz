 import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`https://mini-job-board-navaz.onrender.com/api/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <p className="mb-2">{job.company} - {job.location} ({job.type})</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;
