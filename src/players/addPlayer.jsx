/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { createPlayer, getPlayer, updatePlayer } from "../services/playerService";
import { useParams } from "react-router-dom";

export default function AddPlayer(){

    const {_id} = useParams();

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

    }, [])

    function handlePlayer(e){
        setPlayer({...player,[e.target.name]: e.target.value})
    }

    function addPlayer(){
        createPlayer(player).then();
        //setPlayer(.data);
    }

    function update(e){
        e.preventDefault();
        updatePlayer(_id,player).then();
    }

    return (
        <div className="add-player">
            <form className="container mt-5">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" name="name" onChange={handlePlayer} value={player.name} />
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age:</label>
                    <input type="number" className="form-control" name="age" onChange={handlePlayer} value={player.age} />
                </div>

                <div className="mb-3">
                    <label htmlFor="team" className="form-label">Team:</label>
                    <input type="text" className="form-control" name="team" onChange={handlePlayer} value={player.team} />
                </div>

                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status:</label>
                    <input type="text" className="form-control" name="status" onChange={handlePlayer} value={player.status} />
                </div>

                {_id==null? <button type="submit" className="btn btn-primary" onClick={addPlayer}>Add Player</button> : <button type="submit" className="btn btn-warning" onClick={update}>Edit Player</button>}
            </form>

        </div>
    )
}