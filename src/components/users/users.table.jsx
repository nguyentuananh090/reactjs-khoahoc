import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import UpdateForm  from './users.update';
import { useState } from 'react';
import DetailForm from './users.detail';
import { message, Popconfirm,notification} from 'antd';
import { DeleteUserApi } from '../../services/api_service';


const UsersTable = (props) => {
    const { dataUsers,loadUsers } = props;
    const [UpdateModal, setUpdateModal] = useState(false);
    const [dataUpdate, setDataUpdata] = useState(null);
    const [dataDetail, setDataDetail] = useState(null);
    const [open, setOpen] = useState(false);

   
    const cancel = e => {
        console.log(e);
        message.error('Click on No');
    };
     const handleDelete = async (id) => {
        const res = await DeleteUserApi(id);
        // debugger
        if (res.data) {

            notification.success({
                message: "Delete user",
                description: "Delete user thành công"
            })
            await loadUsers();
        } else {

            notification.error({
                message: "Error Update user"+id,
                description: JSON.stringify(res.message)

            })
        }


    };
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render:(_,record)=>(
                <>
                <a onClick={()=>{setOpen(true);setDataDetail(record)}}>{record._id}</a>
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
                 <Popconfirm
                    title="Delete User"
                    description="Bạn có muốn xóa user này không?"
                    onConfirm={()=>handleDelete(record._id)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                     placement="topLeft"
                >
                    <DeleteOutlined style={{color:"red",cursor:"pointer"}} />
                </Popconfirm>
                
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
    loadUsers={loadUsers}/>
    <DetailForm
    open={open}
    setOpen={setOpen}
    dataDetail={dataDetail}
    setDataDetail={setDataDetail}
    />
   

    </>;
}
export default UsersTable;