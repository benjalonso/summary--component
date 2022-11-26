import { useState } from "react";
import BirdCardsContainer from "./BirdCardsContainer.jsx";
import { NavBar } from "./NavBar.jsx";
import PopularCardsContainer from "./PopularCardsContainer.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <PopularCardsContainer/>
      <BirdCardsContainer/>
      <Footer/>
    </div>
  );
}

export default App;
