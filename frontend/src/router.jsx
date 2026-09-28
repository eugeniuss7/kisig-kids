import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Enrollment from './pages/Enrollment'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Programs from './pages/Programs'
import TeachingStaff from './pages/TeachingStaff'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'programs', element: <Programs /> },
      { path: 'teaching-staff', element: <TeachingStaff /> },
      { path: 'enrollment', element: <Enrollment /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
