import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import LandingPage from '../pages'
import Contoh from '../pages/Contoh'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/contoh",
        element: <Contoh />,
    },
])

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}
export default App;