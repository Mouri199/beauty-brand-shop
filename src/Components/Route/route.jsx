import {
    createBrowserRouter
  } from "react-router-dom";
import Mainbody from "../Mainbody/Mainbody";
import Home from "../Home/Home";
import Brands from "../Brands/Brands";
import BeautyTips from "../BeautyTips/BeautyTips";
import ContactUs from "../ContactUs/ContactUs";

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
        }
      ]
    
    },
  ]);

  export default router