import { useState, useEffect } from "react";
import { delPlayer, getAllPlayers, getSinglePlayer } from "../API";
import  Player  from "../components/Player";
import PlayerDetail from "../components/PlayerDetail";
import AddPlayer from "../components/AddPlayer";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});
  const [filter, setFilter] = useState("");

  // Fetch all players data
  useEffect(() => {
    getAllPlayers().then(setPlayers);
  }, []);

  // Function to handle displaying details
  function handleDetails(playerId) {
    getSinglePlayer(playerId).then(setPlayer);
  }

  // Function to handle deleting a player
  function handleDelete(playerId) {
    delPlayer(playerId).then(() => {
      // Refresh the players list after deleting a player
      getAllPlayers().then(setPlayers);
    });
  }

  // Function to handle updating players list after adding a new player
  function handlePlayerAdded(updatedPlayers) {
    setPlayers(updatedPlayers);
  }

  // Function to handle updating search filter
  function handleFilter(evt) {
    setFilter(evt.target.value);
  }

  return (
    <div className="container">
      <h2>Welcome to Puppy Bowl</h2>
      <h2>Roster</h2>
      <p>Add, Remove, and Search for Player Details!</p>
      <div onClick={() => setPlayer({})}>
        <PlayerDetail player={player} className="player-container" />
        <div className="form-container">
          <AddPlayer onPlayerAdded={handlePlayerAdded} />
          <label htmlFor="name">Search:</label>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={handleFilter}
          />
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Breed</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {players
                .filter((player) => player.name.toLowerCase().includes(filter))
                .map((player) => {
                  return (
                    <Player
                      key={player.id}
                      player={player}
                      onClick={handleDetails}
                      onDelete={handleDelete}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
