import React from 'react'
import Home from '../images/home.png';

const IntroTvacha = () => {
  return (
    <>
        {/* *******************************Introduction********************************************* */}
        <div className="flex flex-col lg:flex-row items-center justify-center bg-[#ede0d4] py-8 px-4 lg:px-24 my-16 md:my-0">
            <div className="lg:w-1/2 lg:pr-12">
                <h1 className="text-5xl text-extrabold mb-10">Tvacha™</h1>
                <h2 className="text-2xl font-bold text-black mb-4">Know the root cause of your skin disease</h2>
                <div id="myButton" className="bg-black p-3 text-white rounded w-32">
                <a className="text-white hover:text-black" href="/Test">
                    Take the Test
                </a>
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