import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "@mui/material";
import Switch from '@mui/material/Switch';
import Sidebar from "./components/Sidebar.tsx";

function App() {
  const [count, setCount] = useState(0)
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
      <div style={{display: 'flex', height: '100vh', width: '100vw', flexDirection: 'row'}}>
          <div  style={{flex: 1}}>
              <Sidebar/>
          </div>
          <div style={{flex: 4, backgroundColor: '#f9f9f9'}}>
             g
          </div>
      </div>
  )
}

export default App
