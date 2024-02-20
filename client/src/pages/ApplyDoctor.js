import Layout  from '../components/Layout.js'
import React from 'react'
import axios from 'axios'
import { Col, Row, Form, Input, TimePicker, message} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {showLoading, hideLoading} from '../redux/features/alertSlice'
import moment from 'moment'
import Footer from '../components/Footer.js'

const ApplyDoctor = () => {
    const {user} = useSelector((state)=>state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    //handle form
    const handleFinish = async(values) =>{
        try{
            dispatch(showLoading())
            const res = await axios.post('/api/v1/user/apply-doctor', 
            {   ...values,
                userId:user._id,
                timings:[
                    moment(values.timings[0].format("HH:mm")),
                    moment(values.timings[1].format("HH:mm")),
                ],
            }, 
            {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            dispatch(hideLoading())
            if(res.data.success){
                message.success(res.data.message)
                navigate('/')
            }
            else{
                message.error(res.data.message)
            }
        }catch(error){
            dispatch(hideLoading())
            console.log(error)
            message.error('Something Went Wrong')
        }
    }
  return (
    <>
        <Layout>
        <div className="my-28 ">
            <h1 className="text-center text-4xl font-bold mb-4 text-center">Apply Docotor</h1>
            <Form layout="vertical" onFinish={handleFinish} className='m-16 p-4  bg-white rounded-xl shadow-lg '>
                <h6 className="">Personal Details:</h6>
                <Row gutter={20}>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item 
                            label="First Name" 
                            name="firstName" 
                            required rules={[{required:true}]}
                        >
                            <Input type="text" placeholder="your first name"/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item 
                            label="Last Name" 
                            name="lastName" 
                            required rules={[{required:true}]}
                        >
                            <Input type="text" placeholder="your last name"/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item 
                            label="Phone No" 
                            name="phone" 
                            required rules={[{required:true}]}
                        >
                            <Input type="text" placeholder="your phone no"/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item 
                            label="Email" 
                            name="email" 
                            required rules={[{required:true}]}
                        >
                            <Input type="text" placeholder="your email"/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item 
                            label="Website" 
                            name="website" 
                            required rules={[{required:true}]}
                        >
                            <Input type="text" placeholder="your website"/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item 
                            label="Address" 
                            name="address" 
                            required rules={[{required:true}]}
                        >
                            <Input type="text" placeholder="your address"/>
                        </Form.Item>
                    </Col>
                </Row>
                <h6 className="">Professional Details:</h6>
                <Row gutter={20}>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item 
                            label="Specialization" 
                            name="specialization" 
                            required rules={[{required:true}]}
                        >
                            <Input type="text" placeholder="your specialization"/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item 
                            label="Experience" 
                            name="experience" 
                            required rules={[{required:true}]}
                        >
                            <Input type="text" placeholder="your experience"/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item 
                            label="Fees Per Consultation" 
                            name="feesPerConsultation" 
                            required rules={[{required:true}]}
                        >
                            <Input type="text" placeholder="your fees"/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item 
                            label="Timings" 
                            name="timings" 
                            required
                        >
                            <TimePicker.RangePicker format="HH:mm"/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                    <button className="btn btn-primary form-btn" type="submit">Submit</button>
                    </Col>
                </Row>       
            </Form>
        </div>
    <Footer></Footer>
    </Layout>
    
    </>
  )
}

export default ApplyDoctor