import { createContext, useState } from "react";
import BirdCardsContainer from "./BirdCardsContainer.jsx";
import { NavBar } from "./NavBar.jsx";
import PopularCardsContainer from "./PopularCardsContainer.jsx";
import Footer from "./Footer.jsx";
import BirdDetail from "./BirdDetail.jsx";

export const ContentContext = createContext(null);

function App() {
  const [content, setContent] = useState([]);
  const [favorite, setFavite] = useState([])
  return (
    <ContentContext.Provider value={{ content, setContent }}>
      <BirdDetail/>
      <NavBar />
      <PopularCardsContainer />
      <BirdCardsContainer />
      <Footer />
    </ContentContext.Provider>
  );
}

export default App;
