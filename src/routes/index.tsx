import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import LandingPage from '../pages'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProfilePage from '../pages/ProfilePage'

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
])

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}
export default App;