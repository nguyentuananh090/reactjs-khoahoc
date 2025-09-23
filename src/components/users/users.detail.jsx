import { useEffect, useState } from 'react';
// import { DetailUserApi } from '../../services/api_service';
import { Drawer,Input } from 'antd';



const DetailForm = (props) => {

    const { open,setOpen } = props;

    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [img, setImg] = useState('');


    const [selectedFile, setSelectedFile] = useState('');
    const [preview, setPreview] = useState('');


    const { dataDetail } = props;

    useEffect(() => {
        if (dataDetail != null) {
            setFullName(dataDetail.fullName);
            setPhone(dataDetail.phone);
            setId(dataDetail._id);
            setEmail(dataDetail.email);
            setImg(dataDetail.avatar);

        }

    }, [dataDetail])
     const resetModal = () => {
        setFullName();
        setPhone();
        setId();
        setEmail();
        setImg();
        setPreview(null);
        setSelectedFile(null);
    }
    const handleOnChangeFile= (event)=>{
        if(!event.target.files || event.target.files.length==0){
            setPreview(null);
            setSelectedFile(null);
            return
        }
        const file=event.target.files[0];
        if(file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file))
        }
        console.log(preview);
      
    }
    return (
        <>
            <Drawer
                title="Thông tin chi tiết"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={()=>{setOpen(false);resetModal()}}
                open={open}
                >
                <p>ID: {id}</p>
                <p>Tên: {fullName}</p>
                <p>Email: {email}</p>
                <p>Số điện thoại: {phone}</p>
                <img style={{width:"100%"}} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${img}`}/>
                <img style={{width:"100%"}} src={`${preview}`}/>
                <Input 
                onChange={(event)=>{handleOnChangeFile(event)}}
                type="file" name="avatar"  accept="image/png, image/jpeg"/>
            </Drawer>
        </>

    );
}
export default DetailForm;