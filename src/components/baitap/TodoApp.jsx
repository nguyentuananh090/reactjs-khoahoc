import AddData from "./AddComponent"
import ImgComponent from "./ImgComponent"
import logo_react from "../../assets/react.svg"
import ListData from "./ListComponent"
import { useState } from "react";



const TodoApp=()=>{
  const [dataList, setDataList] = useState([]);
  const addNewFunc=(name)=>{
    if(name===''){
      alert("Vui lòng nhập name");
      return;
    }
    let newData = { id: dataList.length + 1, name: name }
    setDataList([...dataList,newData])
  }
  const deleteFunc = (id) => {
    const currentData = dataList.filter(item => item.id !== id);
    setDataList(currentData);
  }
    return (
    <>
      <div className="box">
        <div className="title">Todo list</div>
        <AddData
          addNewFunc={addNewFunc}
         
        />
        {dataList.length > 0 ?
        <ListData
          dataList={dataList}
          deleteFunc={deleteFunc}
        />
        : 
        <ImgComponent/>
        }
        <img src={logo_react}/>
      </div>
    </>
  )
}
export default TodoApp