import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import data from './data.json';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => setLoggedInUser(user);

  const handleLogout = () => setLoggedInUser(null); // Logout function

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !loggedInUser ? <Login onLogin={handleLogin} /> : <Navigate to={`/${loggedInUser.UserType}`} />
          }
        />
        <Route
          path="/admin"
          element={loggedInUser && loggedInUser.UserType === 'admin' ? (
            <AdminDashboard users={data} onLogout={handleLogout} />
          ) : (
            <Navigate to="/" />
          )}
        />
        <Route
          path="/student"
          element={loggedInUser && loggedInUser.UserType === 'student' ? (
            <StudentDashboard user={loggedInUser} onLogout={handleLogout} />
          ) : (
            <Navigate to="/" />
          )}
        />
      </Routes>
    </Router>
  );
}

export default App;
