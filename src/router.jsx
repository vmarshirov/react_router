import React from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root  from "./routes/root";
import Home from "./routes/home.jsx";
import Contact from "./routes/contact";
import FilterForm from "./routes/filterForm";
import Try from "./routes/try";
import ErrorPage from "./error-page";


const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            errorElement: <ErrorPage/>,
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
                {
                    path: "try",
                    element: < Try />,
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
export default Router;


