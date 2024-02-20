import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        {/* <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={doctor.image}
            alt={`${doctor.firstName} ${doctor.lastName}`}
          />
        </div> */}
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Dr. {doctor.firstName} {doctor.lastName}
          </div>
          <p className="mt-2 text-gray-500">{doctor.specialization}</p>
          <p className="mt-2">Experience: {doctor.experience} years</p>
          <p className="mt-2">Fees Per Consultation: {doctor.feesPerConsultation}</p>
          <p className="mt-2">
            Timings: {doctor.timings[0]} - {doctor.timings[1]}
          </p>
          <button
            className="mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
