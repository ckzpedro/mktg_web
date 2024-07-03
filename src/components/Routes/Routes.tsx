import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../../App";
import Item from "../Pages/Item";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "item", element: <Item /> },
        ],
    },
]);