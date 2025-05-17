 import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    type: '',
    location: '',
    description: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post('https://mini-job-board-navaz.onrender.com/api/jobs', formData);
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add a New Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" onChange={handleChange} placeholder="Job Title" className="border p-2 w-full" required />
        <input name="company" onChange={handleChange} placeholder="Company Name" className="border p-2 w-full" required />
        <input name="location" onChange={handleChange} placeholder="Location" className="border p-2 w-full" required />
        <select name="type" onChange={handleChange} className="border p-2 w-full" required>
          <option value="">Select Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
        <textarea name="description" onChange={handleChange} placeholder="Description" className="border p-2 w-full" required />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AddJob;
