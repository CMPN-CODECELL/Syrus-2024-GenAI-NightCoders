import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorList from '../components/DoctorList.js';
import Layout from '../components/Layout.js';
import Footer from '../components/Footer.js';

const ViewDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to fetch doctors data
  const fetchDoctorsData = async () => {
    try {
      const res = await axios.get('/api/v1/user/getAllDoctors', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Filter doctors based on search query
  const filterDoctors = () => {
    const filteredDoctors = doctors.filter((doctor) =>
      `${doctor.firstName} ${doctor.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredDoctors);
  };

  useEffect(() => {
    fetchDoctorsData();
  }, []);

  useEffect(() => {
    filterDoctors();
  }, [searchQuery, doctors]);

  return (
    <>
      <Layout>
        <div className="container mx-auto my-8 px-4">
          <h1 className="text-center text-4xl font-bold mb-4">Doctors List</h1>
          {/* Search input field */}
          <div className="max-w-md mx-auto mb-4">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Search doctors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Render search results */}
            {searchResults.map((doctor) => (
              <DoctorList key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </Layout>

      <Footer />
    </>
  );
};

export default ViewDoctors;
