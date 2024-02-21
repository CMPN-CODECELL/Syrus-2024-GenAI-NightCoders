import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout.js'
import Typewriter from "typewriter-effect";
import Footer from '../components/Footer.js';

const NutritionExpert = () => {
    // const [image, setImage] = useState(null);
    // const [data, setData] = useState(null);

    // const handleImageUpload = (event) => {
    //     setImage(event.target.files[0]);
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const formData = new FormData();
    //     formData.append('image', image);

    //     try {
    //         const response = await axios.post('http://localhost:8001/process', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    //         setData(response.data.percentage_malnutrition);
    //         console.log(response.data); // Handle successful response
    //     } catch (error) {
    //         console.error(error); // Handle errors
    //     }
    // };
    const [image, setImage] = useState(null);
    const [imageShow, setImageShow] = useState(null);
    const [prediction, setPrediction] = useState(null);
  
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setImageShow(imageUrl);
    };
  
    const handleUpload = () => {
      const formData = new FormData();
      formData.append('image', image);
  
      axios.post('http://localhost:8001/process', formData)
        .then(response => {
          console.log(response.data);
          setPrediction(response.data.prediction);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };

    return (
        <Layout>
            <section className="py-12 ">
                <div className="container px-6 rounded-lg shadow-2xl m-10 p-3">
                    <h1 className="text-center font-extrabold text-4xl mt-10 mb-10"><span className="text-[rgb(18,102,241)]">Nutrition AI</span></h1>
                    <p className="text-center font-bold text-2xl mt-2 mb-5">Upload a Image to get nutritional support</p>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="md:w-8/12 justify-center p-3 lg:ml-2 lg:w-5/12">
                            
                        <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#F9D0BE]">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                            <p className="mb-2 text-xs md:text-sm font-bold text-black"><span className="">Click to upload</span> or drag and drop</p>
                            <p className="text-xs md:text-sm text-center font-bold text-black">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input type="file" onChange={handleFileChange} name="image" accept="image/*" id="image-upload"  className="hidden" />
                    </label>                  
                  
                     <button onClick={handleUpload}  className="mt-3 bg-[rgb(63,61,86)] text-white inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">Upload</button>

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

export default NutritionExpert;
