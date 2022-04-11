import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/mainPage';
import MenuPage from './pages/menuPage';
import PlayPage from './pages/playPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/play' element={<PlayPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
