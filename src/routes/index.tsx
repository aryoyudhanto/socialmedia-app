import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import LandingPage from '../pages'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import ProfilePage from '../pages/ProfilePage'
import DetailPage from '../pages/DetailPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/profile",
        element: <ProfilePage />,
    },
    {
        path: "/post",
        element: <DetailPage />,
    },
])

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}
export default App;