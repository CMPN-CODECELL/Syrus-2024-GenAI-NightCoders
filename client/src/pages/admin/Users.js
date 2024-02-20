import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { Table } from 'antd'
import  Footer  from '../../components/Footer.js'

const Users = () => {
  const [users,setUsers] = useState([])

  //getUsers
  const getUsers=async()=>{
    try{
        const res = await axios.get('/api/v1/admin/getAllUsers',{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        if(res.data.success){
            setUsers(res.data.data)
        }
    }catch(error){
        console.log(error)

    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  //antd table col
  const columns = [
    {
        title:'Name',
        dataIndex:'name',
    },
    {
        title:'Email',
        dataIndex:'email',
    },
    {
        title:'Doctor',
        dataIndex:'isDoctor',
        render: (text,record)=>(
            <span>{record.isDoctor ? 'Yes' : 'No'}</span>
        )

    },
    {
        title:'Actions',
        dataIndex:'actions',
        render:(text,record)=>(
            <div className='d-flex'>
                <button className='btn btn-danger'>Block</button>

            </div>
        )
    }
  ]
  return (
    <Layout>
        <div className='my-28 '>
            <h1 className='text-center text-4xl font-bold mb-4'>Users List</h1>
            <Table 
            columns={columns} 
            dataSource={users}
            className='rounded-lg shadow-md m-10'
            />
        </div>
        <Footer></Footer>
    </Layout>
  )
}

export default Users