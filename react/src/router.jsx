import {createBrowserRouter, Navigate} from "react-router-dom"
import NotFound from "./views/NotFound"
import Login from "./views/Login"
import Signup from "./views/Signup"
import Users from "./views/Users"
import DefaultLayout from "./component/DefaultLayout"
import Dashboard from "./views/Dashboard"
import GuestLayout from "./component/GuestLayout"


const router = createBrowserRouter([
    {
        path :'/',
        element: <Navigate to='/users'/>

    },

    {
        path:"/",
        element: <DefaultLayout/>,
        children:[
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/users',
                element: <Users/>
            },
        ]

    },
    {
        path:"/",
        element: <GuestLayout/>,
        children:[
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]

    },



{
    path: '*',
    element: <NotFound/>
}


])

export default router