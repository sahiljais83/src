// react router
import { createBrowserRouter,RouterProvider } from "react-router-dom";
// custom context provider (authentication and product)
import { AuthContext } from "./authContext";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home";
import {SignUp} from "./pages/SignUp"
import Error from './pages/Error';
import MyOrder from "./pages/MyOrder/MyOrder";
import Cart from "./pages/Cart/Cart"
import SignIn from "./pages/SignIn/SignIn"
import { ProductContext } from "./productContext";

function App() {
    //all the link routes
    const router=createBrowserRouter([
      {path:"/",
      element:<Navbar/>,
      errorElement:<Error/>,
      children:[
        {index:true,element:<Home/>  },
        { path:"/myorder", element: <MyOrder />},
        { path:"/cart", element: <Cart />},
        { path:"/signin", element: <SignIn />},
        { path:"/signup", element: <SignUp />},
      ]
    }
    ])
    return (
      <>
       {/* custom authContext provider */}
       <AuthContext>
        {/* custom product context provider */}
        <ProductContext>
          <RouterProvider router={router} />    
        </ProductContext>
      </AuthContext>
      </>
    );
}

export default App;
