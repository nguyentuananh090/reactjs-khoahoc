const AddData=(props)=>{
    const {addNewFunc} = props;
    // addNewFunc("TA");
    let dem=1;
    const handleClick=()=>{
        alert("Click handleClick "+(dem++));
    }
    // const handleOnChange=(event)=>{
    //     console.log("Click handleOnChange",event.target.value); 
    // }
    const handleOnChange=(name)=>{
        console.log("Click handleOnChange",name); 
    }
    return (
        <>
        <div className="form-todo">
          <input onChange={(event) =>handleOnChange(event.target.value)} type="text" name="name" />
          <input onClick={handleClick} style={{cursor:'pointer'}} type="submit" value="Submit" />
        </div>
        </>
    )
}
export default AddData;