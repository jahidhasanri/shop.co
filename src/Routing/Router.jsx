import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mains from "../Mains";
import Home from "../Pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Mains></Mains>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        }
    ]
  },
]);

export default router;
