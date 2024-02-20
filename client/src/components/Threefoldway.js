import React from 'react'

const Threefoldway = () => {
  return (
    <>
    {/* Threefold Way Section */}
        <div className="flex flex-col justify-center items-center p-2 rounded-xl bg-white shadow-2xl m-28 mt-10 mb-10 w-fit">
          <h1 className="text-center font-extrabold text-4xl mt-10">The Threefold Way</h1>
          <p className="text-center font-semibold text-xl mt-10">Summon Everyone in one Platform</p>
          <h1 className="text-center font-semibold text-2xl mt-8"> Doctors <span className="text-green-500">+</span> Patients <span className="text-green-500">+</span> Donators </h1>
          <p className="text-center font-semibold text-xl m-10 p-4 md:w-1/2  md:h-20">Our Platform brings together all the three parties together which makes the process of treatment seamless.</p>
        </div>
    </>
  )
}

export default Threefoldway