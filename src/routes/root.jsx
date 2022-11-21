import {NavLink,  Outlet} from "react-router-dom";

export default function Root() {
    let activeStyle = { textDecoration: "underline", };
    return (<>
        <div id="sidebar">
            <h1>Навигация</h1>
            <nav>
                <ul>
                    <li> <NavLink to="home"  style={({isActive}) =>  isActive ? activeStyle : undefined } >Home</NavLink>  </li>
                    <li> <NavLink to="contact"  style={({isActive}) =>  isActive ? activeStyle : undefined } >Contact</NavLink>  </li>
                    <li> <NavLink to="filterForm"  style={({isActive}) =>  isActive ? activeStyle : undefined } >filterForm</NavLink>  </li>
                </ul>
            </nav>
        </div>

        <div id="detail">
            <Outlet/>
        </div>

    </>);
}