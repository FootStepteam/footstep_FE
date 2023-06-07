import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/user/profile"
          element={<ProfilePage />}
        />
      </Routes>
    </>
  );
}

export default App;
