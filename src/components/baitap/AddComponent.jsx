const AddData=(props)=>{
    const {addNewFunc} = props;
    addNewFunc("TA")
    return (
        <>
        <div className="form-todo">
          <input type="text" name="name" />
          <input type="submit" value="Submit" />
        </div>
        </>
    )
}
export default AddData;