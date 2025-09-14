import React, { useState } from 'react';
import { Button, Descriptions, Input, message, notification } from 'antd';
import { createUserApi } from '../../services/api_service';
// import { JSON } from 'react-router-dom';


const UsersForm = () => {
    const [fullName, setFullName] = useState('cds');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleClickBtn = async () => {
        const res = await createUserApi(fullName, phone, password, email);
        // debugger
        if(res.data){
            notification.success({
                message:"Create user",
                description:"Tạo user thành công"
            })
        }else{
            notification.error({
                message:"Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }


    return (
        <div className='form-user'>
            <div className='form-input'>
                <label htmlFor="">fullName</label>
                <Input value={fullName} onChange={(event) => setFullName(event.target.value)} name='fullName' />
            </div>
            <div className='form-input'>
                <label htmlFor="">email</label>
                <Input value={email} onChange={(event) => setEmail(event.target.value)} name='email' />
            </div>
            <div className='form-input'>
                <label htmlFor="">phone</label>
                <Input value={phone} onChange={(event) => setPhone(event.target.value)} name='phone' />
            </div>
            <div className='form-input'>
                <label htmlFor="">password</label>
                <Input.Password value={password} onChange={(event) => setPassword(event.target.value)} name='password' />
            </div>
            <div className='form-input'>
                <Button
                    onClick={() => handleClickBtn()}
                    type='primary'>submit</Button>
            </div>
        </div>
    );
}
export default UsersForm;