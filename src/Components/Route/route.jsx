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
        loader: () => fetch('http://localhost:8000/brands')
      },
      {
        path: '/brandDetails/:name',
        element: <BrandDetails></BrandDetails>,
        loader: ({params}) => fetch(`http://localhost:8000/bDetails/${params.name}`)
      },

      {
        path: '/beautytips',
        element: <BeautyTips></BeautyTips>
      },
      // {
      //   path: '/update/:id',
      //   element: <Update></Update>,
      //   loader: ({ params }) => fetch(`http://localhost:8000/brands/${params.id}`)
      // },
      {
        path: '/contactus',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
        loader: () => fetch ('http://localhost:8000/addproducts')
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
        loader: () => fetch(`http://localhost:8000/cart`)
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
        loader: ({params}) => fetch(`http://localhost:8000/Details/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:8000/Details/${params.id}`)

      }
    ]

  },
]);

export default router