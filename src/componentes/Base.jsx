import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import {BrowserRouter} from "react-router-dom";

function Base() {
  

  return (
    <BrowserRouter>
      <div className="grid grid-row-2 h-screen">
      <Header></Header>
        <div className="grid grid-cols-5 gap-2 p-2">
          <div>
            <Menu></Menu>
          </div>

          <div className="col-span-4 backdrop-brightness-150 mt-2 h-full shadow-xl shadow-white border-4 border-indigo-0 border-b-yellow-200 border-r-yellow-200">
            <Body></Body>
          </div>
        </div>
        
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default Base;
