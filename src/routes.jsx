import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Login, Profile, Profiles, Register } from './pages';

export default function RoutesLogic() {
  const [user, setUser] = useState(null);

  window.addEventListener('storageUser', () => {
    setUser(window.localStorage.getItem('user'));
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          exact
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/profile/:username"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          exact
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
}
