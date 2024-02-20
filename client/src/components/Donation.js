import React from 'react'
import DonationImage from '../images/donate.webp'


const Donation = () => {
  return (
    <>
        {/* ---------------------------------------- Donation Section --------------------------------------- */}
        <div className="bg-[#fcbd58] p-5">
            <h1 className="mt-10 text-center font-extrabold text-black text-3xl">DONATE</h1>
                <section className="container mx-auto p-6 md:py-8 px-0 md:p-8 md:px-0">
                    <section className="p-4 md:p-0 flex flex-col justify-around gap-10 md:flex-row">
                        {/* First Card */}
                        <div className="min-h-96 max-w-xl w-full rounded-xl transform bg-white duration-500 hover:-translate-y-1 cursor-pointer shadow-lg flex flex-row justify-center">
                            <img src={DonationImage} style={{ width: '60%' }} alt="donation" />
                        </div>
                        {/* Second Card */}
                        <article className="min-h-100 bg-orange-600 max-w-xl w-full rounded-xl text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer shadow-lg" style={{backgroundImage: `url(${DonationImage})`}}>
                            <div className="bg-black bg-opacity-60 p-6 rounded-xl h-full">
                                <h1 className="mt-5 text-3xl text-gray-100 leading-snug  min-h-33">Alone we can do so little; together we can do so much</h1>
                                <div className="ml-20 mt-10">
                                    <span className="text-xl">-</span>
                                    <span className="font-bold text-xl">HELEN KELLER</span>
                                </div>
                                <div className="mt-16 flex justify-between ">
                                    <span className="p-3 pl-0 font-bold"></span>
                                    <div className="p-3 border-2 border-gray-200 rounded-md text-base bg-green-400 text-black hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black">
                                        <form action="/Donate" method="post">
                                            <button type="submit" id="myButton1">Donate Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </section>
            </div>
                    

    </>
  )
}

export default Donation