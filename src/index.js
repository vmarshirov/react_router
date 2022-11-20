import { createRoot } from "react-dom/client";
import Header from "./header";
import Main from "./main"
import "./index.css";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
        <div id="index">
            < Header/>
            < Main/>
        </div>
    );

