import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AdminDashboardScreen from "./screens/AdminDashboardScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AboutScreen from "./screens/AboutScreen";
import FarmersScreen from "./screens/FarmersScreen";
import TransactionsScreen from "./screens/TransactionsScreen";
import LogoutScreen from "./screens/LogoutScreen";
import FarmersGroupScreen from "./screens/FarmersGroupScreen";
import FarmContentScreen from "./screens/FarmContentScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/admin-dashboard" element={<AdminDashboardScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/farmers" element={<FarmersScreen />} />
        <Route path="/farmers-group" element={<FarmersGroupScreen />} />
        <Route path="/transactions" element={<TransactionsScreen />} />
        <Route path="/logout" element={<LogoutScreen />} />
        <Route
          path="/farm-group-content/:farm_id"
          element={<FarmContentScreen />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
