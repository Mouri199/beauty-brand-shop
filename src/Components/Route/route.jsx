import {
  createBrowserRouter
} from "react-router-dom";
import Mainbody from "../Mainbody/Mainbody";
import Home from "../Home/Home";
import BeautyTips from "../BeautyTips/BeautyTips";
import ContactUs from "../ContactUs/ContactUs";
import AddProduct from "../AddProduct/AddProduct";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BrandDetails from "../Brands/BrandDetails";
import Update from "../Brands/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainbody></Mainbody>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://entice-server-7g2onuih2-mouris-projects.vercel.app/brands')
      },
      {
        path: '/brandDetails/:id',
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) => fetch(`hhttps://entice-server-7g2onuih2-mouris-projects.vercel.app/brands/${params.id}`)
      },
      {
        path: '/beautytips',
        element: <BeautyTips></BeautyTips>
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://entice-server-7g2onuih2-mouris-projects.vercel.app/brands/${params.id}`)
      },
      {
        path: '/contactus',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
        loader: () => fetch('http://localhost:8000/brands')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]

  },
]);

export default router