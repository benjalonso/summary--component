import { createContext, useState } from "react";
import BirdCardsContainer from "./BirdCardsContainer.jsx";
import { NavBar } from "./NavBar.jsx";
import Pagination from "./Pagination.jsx";
import PopularCardsContainer from "./PopularCardsContainer.jsx";
import Footer from "./Footer.jsx";

export const ContentContext = createContext(null);

function App() {
  const [content, setContent] = useState(null);

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      <div>
        <NavBar />
        <PopularCardsContainer />
        <BirdCardsContainer />
        <Pagination />
        <Footer />
      </div>
    </ContentContext.Provider>
  );
}

export default App;
