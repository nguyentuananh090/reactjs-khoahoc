import UsersForm from "../components/users/users.form";
import UsersTable from "../components/users/users.table";
import React, { useEffect, useState } from 'react';
import { FetchAllUsersApi } from '../services/api_service';

const UsersPage = () => {
    const [dataUsers,setDataUsers]=useState([]);
    const loadUsers = async () => {
        const dataUsers = await FetchAllUsersApi();
        setDataUsers(dataUsers.data)
    }
    useEffect(()=>{
       loadUsers()
    },[])
    return ( 
        <div className="min-wrap">    
            <UsersForm 
            loadUsers={loadUsers}
            
            />
            <UsersTable
            dataUsers={dataUsers}
            />
        </div>
        );
}
export default UsersPage;
