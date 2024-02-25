const API = "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-a";

// Function to fetch all players from the API
export async function getAllPlayers() {
  try {
    const response = await fetch(`${API}/players`);
    const result = await response.json();
    return result.data.players;
  } catch (err) {
    console.error(err);
  }
}

// Function to fetch data for a single player by ID
export async function getSinglePlayer(playerId) {
  try {
    const response = await fetch(`${API}/players/${playerId}`);
    const result = await response.json();
    return result.data.player;
  } catch (err) {
    console.error(err);
  }
}

// Function to create a new player by sending a POST request to the API
export async function createPlayer(playerObj) {
  try {
    const response = await fetch(`${API}/players`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(playerObj),
    });
    const result = await response.json();
    return result.data.newPlayer;
  } catch (err) {
    console.error(err);
  }
}

// Function to delete a player by sending a DELETE request to the API
export async function delPlayer(playerId) {
  try {
    const response = await fetch(`${API}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result.data);
    return result.data;
  } catch (err) {
    console.error(err);
  }
}