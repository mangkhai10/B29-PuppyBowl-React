import { useState } from "react";
import { createPlayer, getAllPlayers } from "../API";

// Component for adding a new player
export default function AddPlayer({ onPlayerAdded }) {
  // State variables for managing form inputs
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Function to handle form submission
  function handleSubmit(evt) {
    evt.preventDefault();
    const newPlayer = { name, breed, imageUrl };

    // Send a request to create a new player
    createPlayer(newPlayer).then(() => {
      getAllPlayers().then((players) => {
        onPlayerAdded(players);
      });
    });

    // Reset form input fields after submission
    setName("");
    setBreed("");
    setImageUrl("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="breed">Breed:</label>
      <input
        type="text"
        id="breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <label htmlFor="name">Image URL:</label>
      <input
        type="text"
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button className="submit-btn" type="submit">
        Add Player
      </button>
    </form>
  );
}