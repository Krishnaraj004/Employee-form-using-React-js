import { Routes,Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Navbar from "./navbar";
import Anchorlink from "./anchorlink";
import Employee from "./employeefrom";
import 'bootstrap/dist/css/bootstrap.css';
import Api from "./apifetch";
function App() { 
  return (<>
  
    <Navbar />
    {/* <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>  */}
    {/* <Anchorlink /> */}
    <Employee />
    {/* <Api /> */}
    </>
    );
}

export default App;
