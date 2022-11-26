import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashboardLayout/DashboardLayout";

import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/DashBoard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/DashBoard/Admin/AllSellers/AllSellers";
import ReportedItem from "../../Pages/DashBoard/Admin/ReportedItem/ReportedItem";
import MyOrders from "../../Pages/DashBoard/Buyers/MyOrders/MyOrders";
import MyWishList from "../../Pages/DashBoard/Buyers/MyWishList/MyWishList";
import AddProduct from "../../Pages/DashBoard/Sellers/AddProduct/AddProduct";
import MyBuyers from "../../Pages/DashBoard/Sellers/MyBuyers/MyBuyers";
import MyProducts from "../../Pages/DashBoard/Sellers/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Products from "../../Pages/Products/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([

    {

        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>


            },
            {
                path: '/login',
                element: <Login></Login>


            },
            {
                path: '/blog',
                element: <Blog></Blog>


            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            {
                path: '/category/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },


        ]


    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myWishLists',
                element: <MyWishList></MyWishList>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/myBuyers',
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers> </AdminRoute>
            },
            {
                path: '/dashboard/reportedItem',
                element: <AdminRoute><ReportedItem></ReportedItem></AdminRoute>
            },


        ]

    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }


])