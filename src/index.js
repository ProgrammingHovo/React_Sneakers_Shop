import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom'
import {
  BrowserRouter
} from "react-router-dom";
import './index.scss';
import App from './App';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
        <App />
     </BrowserRouter>
  </React.StrictMode>
);
