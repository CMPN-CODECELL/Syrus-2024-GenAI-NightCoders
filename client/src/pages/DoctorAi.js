import React from 'react'
import Layout from '../components/Layout.js'

const DoctorAi = () => {
  return (
    <Layout>
        <section className="py-12 ">
            <div className="container px-6 rounded-lg shadow-2xl m-10 p-3">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="mb-12 md:mb-0 md:w-4/12 lg:w-6/12">
                        <input />
                    </div>
                    <div className="md:w-8/12 justify-center p-3 lg:ml-2 lg:w-5/12">
                        World
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default DoctorAi