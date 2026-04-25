import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {ProtectedRoute, PublicOnlyRoute} from "../components/shared"
import {AuthLayout, DashboardLayout, MainLayout, WatchLayout} from "../layouts";
import {Home, Login, WatchVideo, Signup, Profile, MyChannel, WatchHistory, Subscriptions} from "../pages"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PublicOnlyRoute> <AuthLayout /> </PublicOnlyRoute>}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/channel/:username" element={<Profile />} />
      </Route>

      <Route element={<WatchLayout />}>
        <Route path="/watch-video/:videoId/:slug" element={<WatchVideo />} />
      </Route>

      <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route path="/channel/me" element={<MyChannel />} />
        <Route path="/history" element={<WatchHistory />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Route>
    </Route>
  )
);

export default router;
