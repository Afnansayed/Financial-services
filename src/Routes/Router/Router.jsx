import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import UserRegister from "../../Pages/UserRegister/UserRegister";
import AgentRegister from "../../Pages/AgentRegister/AgentRegister";
import Login from "../../Pages/Login/Login";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
              path:'/',
              element: <Home></Home>  
            },{
                path: '/userRegister',
                element: <UserRegister></UserRegister>
            },{
                path: '/agentRegister',
                element: <AgentRegister></AgentRegister>
            },{
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])
