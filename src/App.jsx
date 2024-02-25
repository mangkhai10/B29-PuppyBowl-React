import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
      </Routes>
    </>
  );
}

export default App;
