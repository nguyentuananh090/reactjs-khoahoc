import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { FetchAllUsersApi } from '../../services/api_service';

const UsersTable = () => {
    const [dataUsers,setDataUsers]=useState([]);
    useEffect(()=>{
       loadUsers()
    },[])
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
         
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
       
        
    ];
   
    
    const loadUsers = async () => {
        const dataUsers = await FetchAllUsersApi();
        setDataUsers(dataUsers.data)
    }

    return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"}/>;
}
export default UsersTable;