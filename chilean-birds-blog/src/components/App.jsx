import { createContext, useState } from "react";
import BirdCardsContainer from "./BirdCardsContainer.jsx";
import { NavBar } from "./NavBar.jsx";
import AuthForm from "./AuthForm.jsx";
import PopularCardsContainer from "./PopularCardsContainer.jsx";
import Footer from "./Footer.jsx";

export const ContentContext = createContext(null);

function App() {
  const [content, setContent] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [modal, setModal] = useState("hidden");
  const [idModal, setIdModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [authModal, setAuthModal] = useState("hidden");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ContentContext.Provider
      value={{
        content,
        setContent,
        modal,
        setModal,
        favorite,
        setFavorite,
        email,
        setEmail,
        password,
        setPassword,
        authModal,
        setAuthModal,
        idModal,
        setIdModal,
        contentModal,
        setContentModal,
      }}
    >
      <NavBar />
      <PopularCardsContainer />
      <BirdCardsContainer />
      {contentModal}
      <AuthForm />
      <Footer />
    </ContentContext.Provider>
  );
}

export default App;
