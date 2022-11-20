import React from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ErrorPage from "./error-page";
import Contact1 from "./routes/contact1";
import Contact, {loader as contactLoader} from "./routes/contact";
import First from "./routes/first";
import Root, {action as rootAction, loader as rootLoader,} from "./routes/root";
// import Root from "./routes/root";
import "./index.css";

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
                    path: "contacts/:contactId",
                    element: < Contact/>,
                    loader: contactLoader,
                },
                {
                    path: "contact1",
                    element: < Contact1/>,
                },

                {
                    path: "first",
                    element: <First/>,
                },
            ],

        },


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

