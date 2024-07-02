import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { UsersPage } from './pages/Users.page';
import { UserDetailsContainer } from './pages/UserDetails.container';
import { UserEditContainer } from './pages/UserEdit.container';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/users',
    element: <UsersPage />,
  },
  {
    path: '/users/view/:id',
    element: <UserDetailsContainer/>,
  },
  {
    path: '/users/edit/:id',
    element: <UserEditContainer/>,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
