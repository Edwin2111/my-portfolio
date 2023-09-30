import {Routes,Route } from "react-router-dom";
import Home from "./Home";
import Biografia from "./Biografia";
import Contact from "./Contact";
import Knowledge from "./Knowledge";
import Aplications from "./Aplications";


function Body() {
  return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/biography" element={<Biografia/>}/>
            <Route path="/knowledge" element={<Knowledge/>}/>
            <Route path="/aplications" element={<Aplications/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
  )
}

export default Body