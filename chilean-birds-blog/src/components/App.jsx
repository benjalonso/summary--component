import { useState } from "react";
import BirdCardsContainer from "./BirdCardsContainer.jsx";
import { NavBar } from "./NavBar.jsx";
import PopularCardsContainer from "./PopularCardsContainer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <PopularCardsContainer/>
      <BirdCardsContainer/>
    </div>
  );
}

export default App;
