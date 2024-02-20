import React from 'react'
import Test from '../images/test.jpg'
import Doctor from '../images/doctor.png'
import Medicine from '../images/medicine.jpg'

const Journey = () => {
  return (
    <>
    {/* Journey Section */}
    <section class="bg-[#fcbd58] p-4 mt-8">
            <h1 class="text-center font-extrabold text-3xl mb-5">The Journey</h1>
            <div class="m-5 flex flex-col justify-center md:flex-row gap-10">
                <div class="p-4 rounded-xl flex flex-col bg-white justify-between shadow-2xl">
                    <div class="flex flex-col md:gap-8">
                        <div class="font-extrabold text-2xl">Take the Test</div>
                        <div class="font-semibold text-lg">An online test that accesses <br></br>the root cause of your skin<br></br>disease</div>
                    </div>
                    <div class="flex flex-row justify-between items-center md:flex-row">
                        <div class=""><img class="rounded-full w-28 h-24 p-3" src={Test} alt=""/></div>
                        <div class="font-semibold text-xl">Step 1</div>
                    </div>
                </div>
                <div class="p-4 rounded-xl flex flex-col bg-white justify-between shadow-2xl">
                    <div class="flex flex-col md:gap-1">
                        <div class="font-extrabold text-2xl">Book <br></br>Appointment</div>
                        <div class="font-semibold text-lg">Understand your skin disease <br></br>and take doctors plan</div>
                    </div>
                    <div class="flex justify-between items-center md:flex-row">
                        <div class=""><img class="rounded-full w-28 h-24 p-3" src={Doctor} alt=""/></div>
                        <div class="font-semibold text-xl">Step 2</div>
                    </div>
                </div>
                <div class="p-4 rounded-xl flex flex-col bg-white justify-between shadow-2xl">
                    <div class="flex flex-col md:gap-1">
                        <div class="font-extrabold text-2xl">Start Healing <br></br>the Skin</div>
                        <div class="font-semibold text-lg">Take Medicine and <br></br>follow the doctors plan</div>
                    </div>
                    <div class="flex justify-between items-center md:flex-row">
                        <div class=""><img class="rounded-full w-28 h-24 p-3" src={Medicine} alt=""/></div>
                        <div class="font-semibold text-xl">Step 3</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Journey