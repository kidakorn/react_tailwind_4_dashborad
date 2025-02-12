import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "@/layouts/MainLayout"
import Home from "@/pages/Home"
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
        ]
    }
])
export const AppRouter = () => {
    return <RouterProvider router={router} />
}