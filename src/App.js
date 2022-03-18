import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/mainPage';
import MenuPage from './pages/menuPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/menu' element={<MenuPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
