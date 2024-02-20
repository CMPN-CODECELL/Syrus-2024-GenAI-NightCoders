import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout.js'
import Typewriter from "typewriter-effect";
import Footer from '../components/Footer.js';

const AnalyzeReport = () => {
    const [file, setFile] = useState(null);
    const [data, setData]=useState();


    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
       
    };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          const response = await axios.post('http://localhost:5000/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          setData(response.data.percentage_malnutrition);
          console.log(response.data); // Handle successful response
        } catch (error) {
          console.error(error); // Handle errors
        }
    };

  return (
    <Layout>
        <section className="py-12 ">
            <div className="container px-6 rounded-lg shadow-2xl m-10 p-3">
            <h1 className="text-center font-extrabold text-4xl mt-10 mb-10"><span className="text-[rgb(18,102,241)]">Report Analyzer</span></h1>
            <p className="text-center font-bold text-2xl mt-2 mb-5">Upload a Report for detailed analysis</p>
                <div className="flex flex-col md:flex-row items-center justify-center">

                    <div className="md:w-8/12 justify-center p-3 lg:ml-2 lg:w-5/12">
                        <form className="mt-10" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M20 8v6m0 0v6m0-6h6m-6 0H8a4 4 0 00-4 4v24a4 4 0 004 4h32a4 4 0 004-4V20a4 4 0 00-4-4h-6l-6-6H8a4 4 0 00-4 4v24"
                                            />
                        `               </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                className="sr-only"
                                                onChange={handleFileUpload}
                                                />
                                            </label>
                                        </div>
                                        <p className="text-xs text-gray-500">CSV up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Upload
                            </button>
                        </form>
                    </div>

                    <div className="md:w-8/12 justify-center p-3 lg:ml-2 lg:w-5/12">
                        <div className="bg-white rounded-lg shadow-md p-4 h-80 overflow-y-auto">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Why do we us It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from"
                                        )
                                        .start();
                                }}  
                                options={{
                                    delay: 1, // Reduce the delay between each character
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
          </section>
          <Footer></Footer>
    </Layout>
  )
}

export default AnalyzeReport