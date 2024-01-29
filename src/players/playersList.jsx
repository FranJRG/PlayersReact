import { useEffect, useState } from "react";
import { deletePlayer, getPlayers } from "../services/playerService";
import { Link } from "react-router-dom";

export default function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayersCompo() {
        let playersData = await getPlayers();
        setPlayers(playersData.data);
    }

    
    getPlayersCompo();
}, []);

  async function deletePlayers(e){
    await deletePlayer(e.target.id);
    setPlayers(players.filter((player)=>player._id !== e.target.id))
  }

  let mapPlayers = null;

  if (players) {
    mapPlayers = players.map((player) => (
      <div className="contPrin" key={player._id}>
        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">Jugador: {player.name}</h5>
            <p>Equipo: {player.team}</p>
            <p>Equipo: {player.status}</p>
            <Link to={`/editPlayer/${player._id}`} className="btn btn-warning">Edit</Link>
            <Link to={`/details/${player._id}`} style={{margin:"5px"}} className="btn btn-primary">Info</Link>
            <button onClick={deletePlayers} id={player._id} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
        <div className="container">
            {mapPlayers}
        </div>
    </div>
  );
}
