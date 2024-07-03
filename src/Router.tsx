import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './Presentation/Home/Home.page';
import { UsersPage } from './Presentation/Users/Users.page';
import { UserDetailsContainer } from './Presentation/Users/UserDetails.container';
import { UserEditContainer } from './Presentation/Users/UserEdit.container';

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
