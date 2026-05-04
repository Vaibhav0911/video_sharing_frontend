import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ProtectedRoute, PublicOnlyRoute } from "../components/shared";
import {
  AuthLayout,
  DashboardLayout,
  MainLayout,
  WatchLayout,
} from "../layouts";
import {
  Home,
  Login,
  WatchVideo,
  Signup,
  Profile,
  MyChannel,
  WatchHistory,
  Subscriptions,
  EditVideo,
  UploadVideo,
  LikedVideos,
  Playlists,
  PlaylistDetails,
  SearchResults 
} from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        element={
          <PublicOnlyRoute>
            {" "}
            <AuthLayout />{" "}
          </PublicOnlyRoute>
        }
      >
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/channel/:username" element={<Profile />} />
        <Route path="/search" element={<SearchResults />} />
      </Route>

      <Route element={<WatchLayout />}>
        <Route path="/watch-video/:videoId/:slug" element={<WatchVideo />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/channel/me" element={<MyChannel />} />
        <Route path="/history" element={<WatchHistory />} />
        <Route path="/subscriptions" element={<Subscriptions />} />

        <Route path="/upload-video" element={<UploadVideo />} />
        <Route path="/videos/:videoId/:slug/edit" element={<EditVideo />} />
        <Route path="/liked-videos" element={<LikedVideos />} />

        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/:playlistId" element={<PlaylistDetails />} />
      </Route>
    </Route>
  )
);

export default router;
