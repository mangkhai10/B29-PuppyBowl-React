/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const PlayerDetail = ({ player }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(!!player.id);
  }, [player]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="player-details">
      {isOpen && (
        <dialog open={isOpen} className="dialog">
          <img
            src={player.imageUrl}
            alt="Player"
            style={{ maxWidth: "20vw", maxHeight: "54vw" }}
          />
          <p>ID: {player.id}</p>
          <p>Name: {player.name}</p>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <p>Created At: {player.createdAt}</p>
          <button className="close-btn" onClick={handleClose}>
            Close
          </button>
        </dialog>
      )}
    </div>
  );
};

export default PlayerDetail;
