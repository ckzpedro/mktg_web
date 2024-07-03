import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Pages/Home";
import Item from "../components/Pages/Item";


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