import { Link } from "react-router-dom"

export default function Details(){
    return(
        <>
            <div className="card" style="width: 18rem;">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/listPlayer">Return</Link>
                </div>
            </div>
        </>
    )
}