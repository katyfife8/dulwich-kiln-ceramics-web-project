import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

// Styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={"/dulwich-kiln-ceramics-web-project"}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);