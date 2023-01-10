import { createContext, useState } from "react";
import BirdCardsContainer from "./BirdCardsContainer.jsx";
import { NavBar } from "./NavBar.jsx";
import PopularCardsContainer from "./PopularCardsContainer.jsx";
import Footer from "./Footer.jsx";
import AuthForm from "./AuthForm.jsx";

export const ContentContext = createContext(null);

function App() {
  const [content, setContent] = useState([]);
  const [favorite, setFavite] = useState([]);
  const [modal, setModal] = useState("hidden");
  return (
    <ContentContext.Provider value={{ content, setContent, modal, setModal }}>
      <NavBar />
      <PopularCardsContainer />
      <BirdCardsContainer />
      <AuthForm/>
      <Footer />
    </ContentContext.Provider>
  );
}

export default App;
