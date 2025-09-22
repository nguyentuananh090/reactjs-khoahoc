import AddForm from "../components/users/users.add";
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
            <AddForm 
            loadUsers={loadUsers}
            
            />
            <UsersTable
            loadUsers={loadUsers}
            dataUsers={dataUsers}
            />
        </div>
        );
}
export default UsersPage;
