import "./App.css";
import { ConfigProvider, theme, Layout, Button, Card } from "antd";
import { Routes, Route } from 'react-router-dom';
import * as React from "react";

import useConfig from "./components/useConfig";

//pages
import Home from './browser/pages/home.component';

//Data
import data from 'data.json';
import user from 'user.json';

const { Header, Content, Footer } = Layout;

/**
 * Our Web Application
 */
function App() {
  const { app } = useConfig();
  return (
    
    <div>
    <header className="header">
      <div className="container">
        <h1 className="logo">Social Media</h1>
        <nav className="main-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Friends</a></li>
            <li><a href="#">Photos</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home userData={user} />} />
      </Routes>
    </main>

    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Social Media. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
}

export default App;