import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {ProtectedRoute, PublicOnlyRoute} from "../components/shared"
import {AuthLayout, DashboardLayout, MainLayout, WatchLayout} from "../layouts";
import {Home, Login, WatchVideo, Signup} from "../pages"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PublicOnlyRoute> <AuthLayout /> </PublicOnlyRoute>}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<WatchLayout />}>
        <Route path="/watch-video/:videoId/:slug" element={<WatchVideo />} />
      </Route>

      <Route element={<ProtectedRoute> <DashboardLayout /> </ProtectedRoute>}>
        <Route path="" />
      </Route>
    </Route>
  )
);

export default router;
