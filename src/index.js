import {createRoot} from "react-dom/client";
import Header from "./header";
import Router from "./router"
import Footer from "./footer";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <div id="index">
        < Header/>
        < Router/>
        < Footer/>
    </div>
);

