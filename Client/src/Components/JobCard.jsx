 import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobCard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('https://mini-job-board-navaz.onrender.com/api/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">🔥 Job Listings</h1>
          <Link
            to="/add-job"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            + Post New Job
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <Link
              to={`/job/${job._id}`}
              key={job._id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{job.type}</span>
              </div>
              <p className="text-gray-600 font-medium">{job.company}</p>
              <p className="text-gray-500 text-sm mt-1">{job.location}</p>
              <p className="text-gray-400 text-sm mt-2 line-clamp-2">{job.description}</p>
            </Link>
          ))}
        </div>

        {jobs.length === 0 && (
          <p className="text-gray-500 text-center mt-20 text-lg">No jobs available right now.</p>
        )}
      </div>
    </div>
  );
};

export default JobCard;
