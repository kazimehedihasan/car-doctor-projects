import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home/Home";
import Login from "./componens/Login/Login";
import SignUp from "./componens/SignUp/SignUp";
import CheckOut from "./pages/CheckOut/CheckOut";
import BookingCheck from "./pages/BookingCheck/BookingCheck";
import PrivetRouters from "./componens/Providers/PrivetRouters";

  
  const Router = createBrowserRouter([
      {
        path: "/",
        element: <Main/>,
        children: [
          {
              path: '/',
              element: <Home/>
          },
          {
            path:'/login',
            element: <Login/>
          },
          {
            path: '/signup',
            element: <SignUp/>
          },
          {
            path: '/checkout/:id',
            element: <PrivetRouters><CheckOut/></PrivetRouters>,
            loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
          },
          {
            path:'/bookingcheck',
            element:<PrivetRouters>
              <BookingCheck/>
            </PrivetRouters>
          }
        ]
      },
    ]);
    export default Router