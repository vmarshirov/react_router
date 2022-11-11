import React from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
// import Root from "./routes/root";
import Root, { loader as rootLoader } from "./routes/root";
import "./index.css";

const Main = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            errorElement: <ErrorPage/>,
            loader: rootLoader,
            children: [
                {
                    path: "contacts/:contactId",
                    element: < Contact/>,
                },
            ],

        },
        /*
                {
                    path: "contacts/:contactId",
                    element: < Contact/>,
                    children: [
                        {
                            path: "contacts/:contactId",
                            element: < Contact/>,
                        },
                    ],
                },
        */
    ]);

    return (
        <div id="root">
            <RouterProvider router={router}/>
        </div>
    );
};
export default Main;

/*
 ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
*/

