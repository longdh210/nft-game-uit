import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import WaitingPage from './pages/waitingPage';
import MenuPage from './pages/menuPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/waiting" element={<WaitingPage />} />
        <Route path='/menu' element={<MenuPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
