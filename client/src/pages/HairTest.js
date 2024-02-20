import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout.js'
import Appointment from '../images/appointment.jpg'

const HairTest = () => {
  const [hairImage, setHairImage] = useState(null);
  const [hairImageShow, setHairImageShow] = useState(null);
  const [hairPrediction, setHairPrediction] = useState(null);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setHairImage(file);
    const imageUrl = URL.createObjectURL(file);
    setHairImageShow(imageUrl);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', hairImage);

    axios.post('http://localhost:8001//Hairtest', formData)
      .then(response => {
        console.log(response.data);
        setHairPrediction(response.data.prediction);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Layout>
      <section className="py-12 ">
         <div className="container px-6 rounded-lg shadow-2xl m-10 p-3">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="mb-12 md:mb-0 md:w-4/12 lg:w-6/12">
              <img src={Appointment} className="w-2/3 rounded-lg" alt="Phone image" />
            </div>
            <div className="md:w-8/12 justify-center p-3 lg:ml-2 lg:w-5/12">
                    <h1 className="text-center font-extrabold text-4xl mt-10 mb-10">Take a <span className="text-[rgb(18,102,241)]">Hair Test</span></h1>
                    <p className="text-center font-bold text-2xl mt-2 mb-5">Get a Preliminary Diagnosis by taking hair test</p>
                    

                    <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#F9D0BE]">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                            <p className="mb-2 text-xs md:text-sm font-bold text-black"><span className="">Click to upload</span> or drag and drop</p>
                            <p className="text-xs md:text-sm text-center font-bold text-black">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input type="file" onChange={handleFileChange} name="image" accept="image/*" id="image-upload"  className="hidden" />
                    </label>
                    <div className="flex items-center justify-center m-2 w-full">
                      {hairImageShow && <img src={hairImageShow} id="output" width="200" alt="Selected" />}
                   </div>
                    <button onClick={handleUpload}  className="mt-3 bg-[rgb(63,61,86)] text-white inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">Upload</button>

                    {hairPrediction && (
                    <div className="mt-2">
                        <h1 className="text-xl mt-2 text-center">Disease Detected</h1>
                        <div className="w-full mt-2 bg-green-100 border border-blue-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <span className="block sm:inline text-center"><strong>{hairPrediction}</strong></span>
                        </div>
                    </div>
                    )}
              </div>
            </div>
            </div>
          </section>
      </Layout>
    </>
  );
};

export default HairTest;
