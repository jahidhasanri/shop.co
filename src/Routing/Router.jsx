import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mains from "../Mains";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Mains></Mains>,
    children:[
        {
            
        }
    ]
  },
]);

export default router;
