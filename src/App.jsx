import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./features/home/Home";
import Files from "./features/files/Files";
import LeaveTracker from "./features/leaveTracker/LeaveTracker";
import Organization from "./features/organization/Organization";
import Login from "./features/login/Login";
import { action as userLoginAction } from "./features/login/LoginForm";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    action: userLoginAction,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/files",
        element: <Files />,
      },
      {
        path: "/leavetracker",
        element: <LeaveTracker />,
      },
      {
        path: "/organization",
        element: <Organization />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
