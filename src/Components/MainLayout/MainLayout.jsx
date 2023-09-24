import { Outlet } from "react-router-dom";

import Nav from "../Navber/Nav";


const MainLayout = () => {
    return (
        <div>
           
            
             <div className="max-w-screen-2xl mx-auto md:mx-32">
          
          <Nav></Nav>
           <Outlet></Outlet>
        </div>
        </div>
      
    );
};

export default MainLayout;