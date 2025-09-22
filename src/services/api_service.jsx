import axios from "./axios_customize";

const createUserApi=(fullName,phone,password,email)=>{
    const URL_API_ADD_USER='/api/v1/user';
    const data={
        fullName:fullName,
        phone:phone,
        password:password,
        email:email
    }
    return axios.post(URL_API_ADD_USER,data);
}

const FetchAllUsersApi= ()=>{
    const URL_API_ADD_USER='/api/v1/user';
    return axios.get(URL_API_ADD_USER);
}
const updateUserApi=(_id,fullName,phone,email)=>{
    const URL_API_ADD_USER='/api/v1/user';
    const data={
        _id:_id,
        fullName:fullName,
        phone:phone,
        email:email
    }
    return axios.put(URL_API_ADD_USER,data);
}
export {createUserApi,FetchAllUsersApi,updateUserApi}