import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import WaitingPage from './pages/waitingPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/waiting" element={<WaitingPage />} />
      </Routes>
    </div>
  );
}

export default App;
