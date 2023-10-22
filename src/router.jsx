import React from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root  from "./root";
import Home from "./routes/home.jsx";
import Contact from "./routes/contact";
import Form from "./routes/form";
import Task from "./routes/task";
import  New_router from "./routes/new_router";
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
                    path: "form",
                    element: < Form/>,
                },
                {
                    path: "task",
                    element: < Task />,
                },
                {
                    path: "new_router",
                    element: <New_router />
                }           ],

        },
    ]);
    return (
        <div id="main">
            <RouterProvider router={router}/>
        </div>
    );
};
export default Router;


