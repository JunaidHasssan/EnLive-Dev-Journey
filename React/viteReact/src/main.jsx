import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Practice(){
  return(
    <div>
      <h3>Me and React</h3>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Practice />
  </StrictMode>,
)