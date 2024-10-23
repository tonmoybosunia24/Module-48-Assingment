import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
       return (
              <div className="px-5 md:px-10 lg:px-0 lg:w-5/6 mx-auto">
                     <Header></Header>
                     <Outlet></Outlet>
                     <Footer></Footer>
              </div>
       );
};

export default Root;