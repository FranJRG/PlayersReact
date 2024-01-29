import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div>
            <nav style={{display:"flex", justifyContent:"space-around"}}>
                <Link to="/listPlayer">Player List</Link>
                <Link to="/addPlayer">Add player</Link>
            </nav>
            <Outlet/>
        </div>
    )
}