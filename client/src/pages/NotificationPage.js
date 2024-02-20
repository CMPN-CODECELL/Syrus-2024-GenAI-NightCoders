import React from 'react'
import Layout from '../components/Layout.js'
import { Tabs, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../redux/features/alertSlice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer.js'


const NotificationPage = () => {
    const dispatch =useDispatch()
    const navigate=useNavigate()
    const {user} = useSelector((state)=>state.user)
    const handleMarkAllRead=async()=>{
        try{
            dispatch(showLoading())
            const res= await axios.post('/api/v1/user/get-all-notification',{userId:user._id,},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`,
                },
            })
            dispatch(hideLoading())
            if(res.data.success){
                message.success(res.data.message)
            }
            else{
                message.error(res.data.message)
            }

        }catch(error){
            dispatch(hideLoading())
            console.log(error)
            message.error("something went wrong")
        }
    }

    //delete notifications
    const handleDeleteAllRead=async()=>{
        try{
            dispatch(showLoading())
            const res= await axios.post('/api/v1/user/delete-all-notification',{userId:user._id},{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(hideLoading())
            if(res.data.success){
                message.success(res.data.message)
            }
            else{
                message.error(res.data.message)
            }
        }catch(        error){
            dispatch(hideLoading())
            console.log(error)
            message.error('Something went wrong in notifications')
        }
    }
  return (
    <Layout>
        <div className="my-28">
            <h4 className='text-center text-4xl font-bold mb-4'>NotificationPage</h4>
            <Tabs className=" shadow-md rounded-md m-8 p-4">
                    <Tabs.TabPane tab={<div className="flex items-center"><i className="lni lni-bell h-6 w-6 mr-2"></i>Unread</div>} key={0}>
                        <div className='flex justify-end mb-2'>
                            <button className='px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600' onClick={handleMarkAllRead}>Mark All Read</button>
                        </div>
                        {user?.notification.map((notificationMsgs, index) => (
                            <div key={index} className='border-b-2 border-gray-200 py-2 cursor-pointer mb-4 rounded-lg bg-[#bbeeee]' onClick={() => navigate(notificationMsgs.onClickPath)}>
                                <i className="lni lni-alarm h-6 w-6 mr-2"></i>
                                <span className="text-gray-800">{notificationMsgs.message}</span>
                            </div>
                        ))}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<div className="flex items-center"><i className="lni lni-checkmark-circle h-6 w-6 mr-2"></i>Read</div>} key={1}>
                        <div className='flex justify-end mb-2'>
                            <button className='px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none hover:bg-red-600' onClick={handleDeleteAllRead}>Delete All Read</button>
                        </div>
                        {user?.seennotification.map((notificationMsgs, index) => (
                            <div key={index} className='border-b-2 border-gray-200 py-2 cursor-pointer mb-4 rounded-lg bg-[#bbeeee]' onClick={() => navigate(notificationMsgs.onClickPath)}>
                                <i className="lni lni-checkmark h-6 w-6 mr-2"></i>
                                <span className="text-gray-800">{notificationMsgs.message}</span>
                            </div>
                        ))}
                    </Tabs.TabPane>
                </Tabs>
        </div>
        <Footer></Footer>
    </Layout>
    
  )
}

export default NotificationPage