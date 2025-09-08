import "./App.css"
import AddData from "./components/baitap/AddComponent"
import ImgComponent from "./components/baitap/ImgComponent"
import logo_react from "./assets/react.svg"
import ListData from "./components/baitap/ListComponent"
import { useState } from "react";
function App() {
  const age=25;
  const name="Hoài Đạt"
  const data = [
        {
          name: "Hoài Đạt",
          age: 25,
          address: "Hà Nội"
        },
        {
          name: "Hoài tuấn anh",
          age: 21,
          address: "Hà Nội"
        }
    ];
  
  const [dataList, setDataList] = useState([
    { name: "Hoài Đạt", age: 25, address: "Hà Nội" },
    { name: "Hoài tuấn anh", age: 21, address: "Hà Nội" }
  ]);
  const addNewFunc=(name)=>{
    let newData={name:name,age:11,address:"Hà Nội"}
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
          name={name}
          age={age}
          data={data}
          dataList={dataList}
        />
        <ImgComponent/>
        <img src={logo_react}/>
      </div>
    </>
  )
}

export default App
