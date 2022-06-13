import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/mainPage";
import MenuPage from "./pages/menuPage";
import PlayPage from "./pages/playPage";
import UnderDevelopePage from "./pages/underDevelopPage";
import FinalResult from "./components/finalResult";
import DeckPage from"./pages/deckPage";
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/play" element={<PlayPage />} />
                <Route path="/developing" element={<UnderDevelopePage />} />
                <Route path="/deck" element={<DeckPage />} />
            </Routes>
        </div>
    );
}

export default App;
