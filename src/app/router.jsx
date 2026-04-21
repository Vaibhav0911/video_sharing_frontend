import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {AuthLayout, DashboardLayout, MainLayout, WatchLayout} from "../layouts";
import {Home, Login, WatchVideo} from "../pages"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<WatchLayout />}>
        <Route path="/watch-video/:videoId/:slug" element={<WatchVideo />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="" />
      </Route>
    </Route>
  )
);

export default router;
