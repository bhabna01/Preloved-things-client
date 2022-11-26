import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashboardLayout/DashboardLayout";

import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Products from "../../Pages/Products/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                // path: '/dashboard',
                // element: <MyAppointment></MyAppointment>
            },
            {
                // path: '/dashboard/allusers',
                // element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }


        ]

    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }


])