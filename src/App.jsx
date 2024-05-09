import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import HomeLayout from "./pages/HomeLayout";
import ForgotPassword from "./pages/auth/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      // {
      //   path: "dashboard",
      //   element: <DashboardLayout />,
      //   children: [
      //     {
      //       index: true,
      //       element: <AddJob />,
      //     },
      //     {
      //       path: "stats",
      //       element: <Stats />,
      //     },
      //     {
      //       path: "all-job",
      //       element: <AllJob />,
      //     },
      //     {
      //       path: "profile",
      //       element: <Profile />,
      //     },
      //     {
      //       path: "admin",
      //       element: <Admin />,
      //     },
      //   ],
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
