import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Store />

    },
    {   
        path: "/page",
        element: <Page />
    }
]);