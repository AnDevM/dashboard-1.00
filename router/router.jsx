import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'
import Dashboard from '../pages/dashboard/Dashboard'
import Accounts from '../pages/accounts/Accounts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to='/dashboard' />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/accounts',
        element: <Accounts />
      }
    ]
  }
])

export default router
