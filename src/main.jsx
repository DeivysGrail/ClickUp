import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Game from "./Game.jsx";
import { Analytics } from "@vercel/analytics/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Analytics/>
    <Game/>
  </React.StrictMode>,
)
