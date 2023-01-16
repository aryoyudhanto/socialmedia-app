import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import LandingPage from '../pages'
import Login from '../pages/Login'
import Register from '../pages/Register'

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
])

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}
export default App;