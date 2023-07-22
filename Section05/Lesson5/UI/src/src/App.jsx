import "./App.css";
import { Routes, Route } from 'react-router-dom';
import * as React from "react";

import useConfig from "./components/useConfig";

//pages
import Home from './browser/pages/home.component';
import data from 'data.json'
import user from 'user.json'

/**
 * Our Web Application
 */
function App() {
  const { app } = useConfig();
  return (
      <div className="App">
        <div className='app-container'>
          <div>

          </div>
          <div className='main'>
            <Routes>
              <Route path="/" element={<Home userData={user} />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;