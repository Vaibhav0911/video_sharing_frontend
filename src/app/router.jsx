import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import WatchVideo from "../pages/WatchVideo";

const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" element={ <MainLayout /> } >
           <Route path="/" element={ <Home /> } />
           <Route path="/login" element={ <Login /> } />
           <Route path="/watch-video/:id" element={ <WatchVideo /> } /> 
       </Route>
    )
)

export default router;