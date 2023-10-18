import {
    createBrowserRouter
  } from "react-router-dom";
import Mainbody from "../Mainbody/Mainbody";
import Home from "../Home/Home";
import Brands from "../Brands/Brands";
import BeautyTips from "../BeautyTips/BeautyTips";
import ContactUs from "../ContactUs/ContactUs";
import AddProduct from "../AddProduct/AddProduct";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainbody></Mainbody>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch ('/public/brandData.json')
        },
        {
            path:'/brands',
            element: <Brands></Brands>
        },
        {
            path: '/beautytips',
            element: <BeautyTips></BeautyTips>
        },
        {
            path: '/contactus',
            element:<ContactUs></ContactUs>
        },
        {
          path:'/addproduct',
          element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path:'/cart',
          element: <Cart></Cart>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    
    },
  ]);

  export default router