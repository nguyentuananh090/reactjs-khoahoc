import "./App.css"
import AddData from "./components/baitap/AddComponent"
import ImgComponent from "./components/baitap/ImgComponent"
import logo_react from "./assets/react.svg"
import ListData from "./components/baitap/ListComponent"
import { useState } from "react";
function App() {
  
  const [dataList, setDataList] = useState([]);
  const addNewFunc=(name)=>{
    if(name===''){
      alert("Vui lòng nhập name");
      return;
    }
    let newData = { id: dataList.length + 1, name: name }
    setDataList([...dataList,newData])
  }
 
  return (
    <>
      {/* <div className="box">
        <div className="title">Todo list</div>
        <AddData
          addNewFunc={addNewFunc}
        />
        <ListData
          dataList={dataList}
        />
        {dataList.length === 0 && 
        <ImgComponent/>
        }
        <img src={logo_react}/>
      </div> */}

      <div className="box">
        <div className="title">Todo list</div>
        <AddData
          addNewFunc={addNewFunc}
        />
        {dataList.length > 0 ?
        <ListData
          dataList={dataList}
        />
        : 
        <ImgComponent/>
        }
        <img src={logo_react}/>
      </div>
    </>
  )
}

export default App
