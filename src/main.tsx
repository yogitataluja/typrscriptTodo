import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import "./App.css"
import { Todoprovider } from './context/todoContext/TodoProvider.tsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Todoprovider>
    <App />
    </Todoprovider>
    </BrowserRouter>
   
  </StrictMode>,
)
