import AddData from "./components/baitap/AddComponent"
import ImgComponent from "./components/baitap/ImgComponent"
import logo_react from "./assets/react.svg"
import ListData from "./components/baitap/ListComponent"
import { useState } from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import { Outlet } from "react-router-dom";
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
  const deleteFunc = (id) => {
    const currentData = dataList.filter(item => item.id !== id);
    setDataList(currentData);
  }
  return (
    <>
      <Header/>
      <Outlet/>
      
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
      <Footer/>
    </>
  )
}

export default App
