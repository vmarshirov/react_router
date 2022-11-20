import {Form, Link, NavLink,  Outlet, useLoaderData} from "react-router-dom";
import {createContact, getContacts} from "../contacts";

export async function action() {
    await createContact();
}

export async function loader() {
    const contacts = await getContacts();
    return {contacts};
}

export default function Root() {
    let activeStyle = { textDecoration: "underline", };
    return (<>
        <div id="sidebar">
            <h1>React Router Contacts</h1>
            <nav>
                <ul>
                    <li> <NavLink to="home"  style={({isActive}) =>  isActive ? activeStyle : undefined } >Home</NavLink>  </li>
                    <li> <NavLink to="contact"  style={({isActive}) =>  isActive ? activeStyle : undefined } >Contact</NavLink>  </li>
                </ul>
            </nav>
        </div>

        <div id="detail">
            <Outlet/>
        </div>

    </>);
}