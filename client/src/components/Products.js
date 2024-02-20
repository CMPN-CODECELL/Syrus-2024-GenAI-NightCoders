import React, {useState} from 'react'
import '../assets/css/animate.css'
import '../assets/css/base-style.css'
import '../assets/css/bootstrap-5.0.0-alpha-2.min.css'
import '../assets/css/lindy-uikit.css'
import '../assets/css/LineIcons.2.0.css'

const Products = () => {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

  return (
    <>
        {/* ***********************************************Products ***********************************************************/}
        <div className="container my-5 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Products</h2>

                <div class="flex flex-col md:flex-row justify-evenly">


                    {/* Product-1 */}
                    <div
                        className={`w-full md:w-1/4 my-2 mx-1 overflow-hidden rounded-lg
                            ${
                            isHovered1 ? 'scale-125 ' : ''
                            }` 
                        }
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                    >
                        <div
                            className={`animated-card bg-[#B2BEF0] p-4  transform transition-all duration-300 
                            ${
                            isHovered1 ? 'scale-100' : ''
                            }` 
                            }
                        >
                            <h3 className="text-xl font-bold mb-2">Analyze Report</h3>
                            <p className="text-sm mb-4">
                                Uncover Your Health:Get <br></br>Insights !!!                            </p>
                            <a href="/reportAnalyze" className="block text-center text-black bg-[#FBBFBE] rounded-full py-2 px-6 hover:bg-[#FBBFBE] transition duration-300">Click</a>
                         </div>
                    </div>


                    {/* Product-2 */}
                    <div
                        className={`w-full md:w-1/4 my-2 mx-1 overflow-hidden rounded-lg
                            ${
                            isHovered2 ? 'scale-125 ' : ''
                            }` 
                        }
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    >
                        <div
                            className={`animated-card bg-[#B2BEF0] p-4  transform transition-all duration-300 
                            ${
                            isHovered2 ? 'scale-100' : ''
                            }` 
                            }
                        >
                            <h3 className="text-xl font-bold mb-2">Nutrition Expert</h3>
                            <p className="text-sm mb-4">
                            Snap & Know : Snap Your Food for Insights                            
                            </p>
                            <a href="/nutrition" className="block text-center text-black bg-[#FBBFBE] rounded-full py-2 px-6 hover:bg-[#FBBFBE] transition duration-300">Click</a>
                         </div>
                    </div>



                    <div
                        className={`w-full md:w-1/4 my-2 mx-1 overflow-hidden rounded-lg
                            ${
                            isHovered3 ? 'scale-125 ' : ''
                            }` 
                        }
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}
                    >
                        <div
                            className={`animated-card bg-[#B2BEF0] p-4 transform transition-all duration-300 
                            ${
                            isHovered3 ? 'scale-100' : ''
                            }` 
                            }
                        >
                            <h3 className="text-xl font-bold mb-2">Doctor AI</h3>
                            <p className="text-sm mb-4">
                               Predict Your Health: Input & Discover!                            </p>
                            <a href="/doctorAI" className="block text-center text-black bg-[#FBBFBE] rounded-full py-2 px-6 hover:bg-[#FBBFBE] transition duration-300">Click</a>
                         </div>
                    </div>



                </div>
        </div>

    </>
  )
}

export default Products