import React, { useEffect, useState } from 'react';
import { Button, Input, notification, Modal } from 'antd';
import { createUserApi, updateUserApi } from '../../services/api_service';
// import { JSON } from 'react-router-dom';


const UpdateForm = (props) => {

    // const { loadUsers } = props;

    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');

    const { dataUpdate, setDataUpdate, UpdateModal, setUpdateModal,loadUsers } = props;

    useEffect(() => {
        if (dataUpdate != null) {
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
            setId(dataUpdate._id);
            setEmail(dataUpdate.email);
        }

    }, [dataUpdate])


    const handleSubmit = async () => {
        const res = await updateUserApi(id, fullName, phone, email);
        // debugger
        if (res.data) {

            notification.success({
                message: "update user",
                description: "Update user thành công"
            })
            setUpdateModal(false);
            resetModal();
            loadUsers();
        } else {

            notification.error({
                message: "Error Update user",
                description: JSON.stringify(res.message)

            })
        }


    };
    const resetModal = () => {
        setFullName();
        setPhone();
        setId();
        setEmail();
    }

    return (
        <>
            <Modal
                title="Update user"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={UpdateModal}
                onOk={handleSubmit}
                onCancel={() => { setUpdateModal(false); setDataUpdate(null) }}
            >

                <div className='form-user'>
                    <div className='form-input'>
                        <label htmlFor="">ID</label>
                        <Input disabled value={id} onChange={(event) => setId(event.target.value)} name='id' />
                    </div>
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


                </div>
            </Modal>

        </>
    );
}
export default UpdateForm;