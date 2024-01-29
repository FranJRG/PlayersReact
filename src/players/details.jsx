import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getPlayer } from "../services/playerService";

export default function Details(){

    const {_id} = useParams()

    let [player,setPlayer] = useState({
        name: "",
        age:0,
        team:"",
        status:""
    });

    useEffect(()=>{
        async function getPlayerId(){
            getPlayer(_id).then((response)=>{
                setPlayer(response.data)
            });
        }

        if(_id!=null){
            getPlayerId();
        }

    }, [_id])

    return(
        <>
            <div className="card" style="width: 18rem;">
                <div className="card-body">
                    <h5 className="card-title">{player.name}</h5>
                    <p className="card-text">{player.team}</p>
                    <p className="card-text">{player.age}</p>
                    <p className="card-text">{player.status}</p>
                    <Link to="/listPlayer">Return</Link>
                </div>
            </div>
        </>
    )
}