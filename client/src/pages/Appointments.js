import axios from 'axios'
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Table } from 'antd'
import Layout from '../components/Layout.js'
import Footer from '../components/Footer.js'

const Appointments = () => {
const [appointments, setAppointments] = useState([])

const getAppointments=async()=>{
    try{
        const res = await axios.get('/api/v1/user/user-appointments',{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
        if(res.data.success){
            setAppointments(res.data.data)
        }
    }catch(error){
        console.log(error)
    }
}

useEffect(() => {
    getAppointments() 
}, [])

const columns = [
    {
        title:"ID",
        dataIndex:"_id"
    },
    {
        title:'Date & Time',
        dataIndex:'date',
        render:(text,record)=>(
            <span>
                {moment(record.date).format('DD-MM-YYYY')} &nbsp;
                {moment(record.time).format('HH:mm')}
            </span>
        )
    },
    {
        title:'Status',
        dataIndex:'status',
    },
    
]

  return (
    <>
        <Layout>
            <div className="my-28 text-center text-4xl font-bold mb-4">
                <h1 className="text-center text-4xl font-bold mb-4">Appointments List</h1>
                <Table
                    columns={columns}
                    dataSource={appointments}
                    bordered
                    pagination={false}
                    className="rounded-lg shadow-md m-10"
                />
            </div>
        </Layout>

        <Footer>

        </Footer>
        
    </>
  )
}

export default Appointments