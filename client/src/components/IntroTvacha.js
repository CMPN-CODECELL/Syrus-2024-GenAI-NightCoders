import React from 'react'
import Home from '../images/home.png';

const IntroTvacha = () => {
  return (
    <>
        {/* *******************************Introduction********************************************* */}
        <div className="flex flex-col lg:flex-row items-center justify-center bg-[#ede0d4] py-8 px-4 lg:px-24 my-16 md:my-0">
            <div className="lg:w-1/2 lg:pr-12">
                <h1 className="text-5xl text-extrabold mb-10">Health Genie™</h1>
                <h2 className="text-2xl font-bold text-black mb-4">Know the root cause of your skin disease</h2>
                <div className='flex flex-row'>
                    <div id="myButton" className="bg-black p-3 text-white rounded w-auto mr-3">
                        <a className="text-white hover:text-black" href="/Test">
                            Take Skin Test
                        </a>
                    </div>
                    <div id="myButton" className="bg-black p-3 text-white rounded w-auto">
                        <a className="text-white hover:text-black" href="/HairTest">
                            Take Hair Test
                        </a>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 my-12">
                <img src={Home} alt="Your image description" className="h-64 lg:h-auto" />
            </div>
        </div>
    </>
  )
}

export default IntroTvacha