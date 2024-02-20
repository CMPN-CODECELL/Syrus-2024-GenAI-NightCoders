import React,{useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { Table, message } from 'antd'
import Footer from '../../components/Footer'

const Doctors = () => {
  const [doctors, setDoctors] = useState([])

  const getAllDoctors=async()=>{
    try{
        const res = await axios.get('/api/v1/admin/getAllDoctors',{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        if(res.data.success){
            setDoctors(res.data.data)
        }
    }catch(error){
        console.log(error)
    }
  }

  //handle account
  const handleAccountStatus=async(record,status)=>{
    try{
        const res = await axios.post('/api/v1/admin/changeAccountStatus',
        {doctorId: record._id, userId: record.userId, status:status},
        {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        if(res.data.success){
            message.success(res.data.message)
            window.location.reload()
        }

    }catch(error){
        message.error('Something Went Wrong')
    }
    
  }

  useEffect(()=>{
    getAllDoctors()
  },[])

  //antd table col
  const columns=[
    {
        title:'Name',
        dataIndex:'name',
        render:(text,record)=>(
            <span>{record.firstName} {record.lastName}</span>
        )
    },
    {
        title:'Status',
        dataIndex:'status'
    },
    {
        title:'phone',
        dataIndex:'phone'
    },
    {
        title:'Actions',
        dataIndex:'actions',
        render:(text,record)=>(
            <div className="d-flex">
                {record.status==='pending' ? (
                <button className="btn btn-success" onClick={()=>handleAccountStatus(record,'approved')}>Approve</button> 
                ): (
                <button className="btn btn-danger">Reject</button>
                )}
            </div>
        )
    }
  ]

  return (
    <Layout>
        <div className="my-28 ">
            <h1 className='text-center text-4xl font-bold mb-4'>Doctors List</h1>
            <Table 
            columns={columns} 
            dataSource={doctors}
            className="rounded-lg shadow-md m-10"
            />
        </div>
        <Footer></Footer>
    </Layout>
    
  )
}

export default Doctors