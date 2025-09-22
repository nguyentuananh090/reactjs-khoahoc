import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { render } from 'react-dom';
import UpdateForm  from './users.update';
import { useState } from 'react';

const UsersTable = (props) => {
    const { dataUsers,loadUsers } = props;
    const [UpdateModal, setUpdateModal] = useState(false);
    const [dataUpdate, setDataUpdata] = useState(null);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render:(_,record)=>(
                <>
                <a href={`user/${record._id}`}>{record._id}</a>
                </>
            )
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
       
         {
            title: 'Action',
            dataIndex: 'action',
            render:(_,record)=>(
                <>
                <EditOutlined 
                onClick={()=>{setDataUpdata(record);setUpdateModal(true);}}
                style={{color:"blue",marginRight:"10px",cursor:"pointer"}} />
                <DeleteOutlined style={{color:"red",cursor:"pointer"}} />
                </>
            )
        },
    ];
   

   

    return <>
    <Table columns={columns} dataSource={dataUsers} rowKey={"_id"}/>
    <UpdateForm   
    UpdateModal={UpdateModal}
    setUpdateModal={setUpdateModal}
    dataUpdate={dataUpdate}
    setDataUpdata={setDataUpdata}
    loadUsers={loadUsers}

    />
    </>;
}
export default UsersTable;