import { use, useState } from "react";

const AddData=(props)=>{
    const {addNewFunc} = props;
    // addNewFunc("TA");
    const handleClick=()=>{
        console.log("Click handleClick: ",ValueInput);
    }
    // const handleOnChange=(event)=>{
    //     console.log("Click handleOnChange",event.target.value); 
    // }
    const [ValueInput,setValueInput]=useState('');
    const handleOnChange=(name)=>{
        setValueInput(name);
       
    }
   
    return (
        <>
        <div className="form-todo">
          <input onChange={(event) =>handleOnChange(event.target.value)} type="text" name="name" />
          <input onClick={handleClick} style={{cursor:'pointer'}} type="submit" value="Submit" />
        </div>
        <div>kết quả nhập input: {ValueInput}</div>
        </>
    )
}
export default AddData;