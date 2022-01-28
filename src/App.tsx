import React from 'react'
import {HashRouter} from 'react-router-dom'
import PublicRouter from './Router'
import './App.global.css'

function App() {
  return (
    <HashRouter>
      <PublicRouter/>
    </HashRouter>
  );
}

export default App;