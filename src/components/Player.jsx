/* eslint-disable react/prop-types */
const Player = ({ player, onClick, onDelete }) => {
  const handleDetailsClick = () => {
    onClick(player.id);
  };

  const handleDeleteClick = () => {
    onDelete(player.id);
  };

  return (
    <tr key={player.id}>
      <td>{player.name}</td>
      <td>{player.breed}</td>
      <td>
        <button className="details-btn" onClick={handleDetailsClick}>
          Details
        </button>
        <button className="del-btn" onClick={handleDeleteClick}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Player;
