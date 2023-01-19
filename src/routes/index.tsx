import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import ProfilePage from 'pages/ProfilePage'
import Register from 'pages/Auth/Register'
import DetailPage from 'pages/DetailPage'
import Login from 'pages/Auth/Login'
import LandingPage from 'pages'

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