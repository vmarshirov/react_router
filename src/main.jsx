import React from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root, {action as rootAction, loader as rootLoader,} from "./routes/root";
import Home from "./routes/home.jsx";
import Contact from "./routes/contact";
import FilterForm from "./routes/filterForm";
import ErrorPage from "./error-page";


const Main = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            errorElement: <ErrorPage/>,
            loader: rootLoader,
            action: rootAction,
            children: [
                {
                    path: "home",
                    element: <Home/>,
                },
                {
                    path: "contact",
                    element: < Contact/>,
                },
                {
                    path: "filterForm",
                    element: < FilterForm/>,
                },
            ],

        },
    ]);
    return (
        <div id="main">
            <RouterProvider router={router}/>
        </div>
    );
};
export default Main;


