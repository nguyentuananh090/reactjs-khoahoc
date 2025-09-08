import "./App.css"
import AddData from "./components/baitap/AddComponent"
import ImgComponent from "./components/baitap/ImgComponent"
import logo_react from "./assets/react.svg"
function App() {
  return (
    <>
      <div className="box">
        <div className="title">Todo list</div>
        <AddData/>
        <ImgComponent/>
        <img src={logo_react}/>
      </div>
    </>
  )
}

export default App
