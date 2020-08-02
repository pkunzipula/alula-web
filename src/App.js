import React from 'react';
import './App.css';
import Home from './components/HomeComponent';
import Login from './components/LoginComponent';
import Register from './components/RegisterComponent';
import PODashboard from './components/PODashboardComponent';
import POProfile from './components/POProfileComponent';
import TenantDashboard from './components/TenantDashboard';

function App() {
  return (
    <TenantDashboard />
  );
}

export default App;
