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
import Details from "../Brands/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainbody></Mainbody>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => ('https://entice-server.vercel.app/brands')
      },
      {
        path: '/brandDetails/:name',
        element: <BrandDetails></BrandDetails>,
        loader: ({params}) => fetch(`https://entice-server.vercel.app/bDetails/${params.name}`)
      },

      {
        path: '/beautytips',
        element: <BeautyTips></BeautyTips>
      },
      {
        path: '/contactus',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
        loader: () => fetch ('https://entice-server.vercel.app/addproducts')
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
        loader: () => fetch(`https://entice-server.vercel.app/cart`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`https://entice-server.vercel.app/Details/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`https://entice-server.vercel.app/Details/${params.id}`)

      }
    ]

  },
]);

export default router