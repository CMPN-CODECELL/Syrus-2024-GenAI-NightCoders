import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import '../assets/css/animate.css'
import '../assets/css/base-style.css'
import '../assets/css/bootstrap-5.0.0-alpha-2.min.css'
import '../assets/css/lindy-uikit.css'
import '../assets/css/LineIcons.2.0.css'

const ContactUs = () => {
  return (
    <>
        <Layout>
            <section id="contact" className="contact-section contact-style-3 mt-0 bg-gray-100">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                    <div className="col-span-1">
                        <div className="section-title text-center mb-8">
                        <h3 className="text-3xl font-bold mb-4">Get in touch</h3>
                        <p>Our user-friendly contact form makes it effortless to reach out, ensuring that your message gets to us promptly. Don't hesitate to drop us a line – we're here to listen and ready to assist you!</p>
                        </div>
                        <div className="contact-form-wrapper">
                        <form action="assets/php/contact.php" method="POST">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <div className="single-input">
                                <input type="text" id="name" name="name" className="form-input" placeholder="Name" />
                                <i className="lni lni-user"></i>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="single-input">
                                <input type="email" id="email" name="email" className="form-input" placeholder="Email" />
                                <i className="lni lni-envelope"></i>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="single-input">
                                <input type="text" id="number" name="number" className="form-input" placeholder="Number" />
                                <i className="lni lni-phone"></i>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="single-input">
                                <input type="text" id="subject" name="subject" className="form-input" placeholder="Subject" />
                                <i className="lni lni-text-format"></i>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="single-input">
                                <textarea name="message" id="message" className="form-input" placeholder="Message" rows="6"></textarea>
                                <i className="lni lni-comments-alt"></i>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="form-button">
                                <button type="submit" className="button"><i className="lni lni-telegram-original"></i> Submit</button>
                                </div>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="left-wrapper">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="single-item">
                            <div className="icon">
                                <i className="lni lni-phone"></i>
                            </div>
                            <div className="text">
                                <p>0045939863784</p>
                                <p>+004389478327</p>
                            </div>
                            </div>
                            <div className="single-item">
                            <div className="icon">
                                <i className="lni lni-envelope"></i>
                            </div>
                            <div className="text">
                                <p>mail@gmail.com</p>
                                <p>admin@yourwebsite.com</p>
                            </div>
                            </div>
                            <div className="single-item">
                            <div className="icon">
                                <i className="lni lni-map-marker"></i>
                            </div>
                            <div className="text">
                                <p>2nd floor, AI&DS Department, VES Institute of Technology</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </Layout>
        
        
    </>
  )
}

export default ContactUs