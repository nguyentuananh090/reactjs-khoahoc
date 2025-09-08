import "./App.css"
import AddData from "./components/baitap/AddComponent"
import ImgComponent from "./components/baitap/ImgComponent"
import logo_react from "./assets/react.svg"
import ListData from "./components/baitap/ListComponent"
import { useState } from "react";
function App() {
  
  const [dataList, setDataList] = useState([
    {id:1, name: "Hoài Đạt", age: 25, address: "Hà Nội" },
    {id:2, name: "Hoài tuấn anh", age: 21, address: "Hà Nội" }
  ]);
  const addNewFunc=(name)=>{
    let newData = { id: dataList.length + 1, name: name, age: 11, address: "Hà Nội" }
    setDataList([...dataList,newData])
  }
 
  return (
    <>
      <div className="box">
        <div className="title">Todo list</div>
        <AddData
          addNewFunc={addNewFunc}
        />
        <ListData
          dataList={dataList}
        />
        <ImgComponent/>
        <img src={logo_react}/>
      </div>
    </>
  )
}

export default App
