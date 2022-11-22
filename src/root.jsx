import {NavLink,  Outlet} from "react-router-dom";

export default function Root() {
    let activeStyle = { textDecoration: "underline", };
    return (<>
        <div id="sidebar">
            <h1>Навигация</h1>
            <nav>
                <ul>
                    <li> <NavLink to="home"  style={({isActive}) =>  isActive ? activeStyle : undefined } >Начальная страница</NavLink>  </li>
                    <li> <NavLink to="contact"  style={({isActive}) =>  isActive ? activeStyle : undefined } >Контакты</NavLink>  </li>
                    <li> <NavLink to="form"  style={({isActive}) =>  isActive ? activeStyle : undefined } >Форма</NavLink>  </li>
                    <li> <NavLink to="task"  style={({isActive}) =>  isActive ? activeStyle : undefined } >Алгоритмическая задача</NavLink>  </li>
                </ul>
            </nav>
        </div>

        <div id="detail">
            <Outlet/>
        </div>

    </>);
}

