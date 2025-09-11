import React, { useState } from 'react';
import { Button, Input  } from 'antd';
import axios from 'axios';


const UsersForm = () =>{
    const [fullName,setFullName]=useState('cds');
    const [phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const handleClickBtn=()=>{
        const URL_API_ADD_USER='http://localhost:8080/api/v1/user';
        const data={
            fullName:fullName,
            phone:phone,
            password:password,
            email:email
        }
        axios.post(URL_API_ADD_USER,data);

        console.log({fullName,phone,password,email});
    }

  
    return (
        <div className='form-user'>
            <div className='form-input'>
                <label htmlFor="">fullName</label>
                <Input value={fullName} onChange={(event)=>setFullName(event.target.value)} name='fullName'/>
            </div>
            <div className='form-input'>
                <label htmlFor="">email</label>
                <Input value={email} onChange={(event)=>setEmail(event.target.value)} name='email'/>
            </div>
            <div className='form-input'>
                <label htmlFor="">phone</label>
                <Input value={phone} onChange={(event)=>setPhone(event.target.value)} name='phone'/>
            </div>
            <div className='form-input'>
                <label htmlFor="">password</label>
                <Input.Password value={password} onChange={(event)=>setPassword(event.target.value)} name='password'/>
            </div>
            <div className='form-input'>
                <Button
                onClick={()=>handleClickBtn()}
                type='primary'>submit</Button>
            </div>
        </div>
    );
}
export default UsersForm;