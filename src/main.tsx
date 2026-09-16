import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Header from './components/Header.tsx'
import { Outlet } from "react-router"
import App from './App.tsx'
import UserList from './pages/UserList.tsx';
import User from './pages/User.tsx'
import Recipe from './pages/Recipe.tsx';
import Connect from './pages/Connect.tsx';
import Profile from './pages/Profile.tsx';
import Error from './pages/Error.tsx';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/userList",
        element: <UserList />,
      },
      {
        path: "/user/:id",
        element: <User />
      },
      {
        path: "/recipe/:id",
        element: <Recipe />
      },
      {
        path: "/connect",
        element: <Connect />
      },
      {
        path: "/profile/:id",
        element: <Profile />
      },
      {
        path: "*",
        element: <Error />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={(router)} />
)