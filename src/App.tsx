import './App.css'
import Sidebar from "./components/sidebar/Sidebar.tsx";
import MainView from "./components/mainview/MainView.tsx";

function App() {

  const SERVER_IP: string = "127.0.0.1";

  return (
      <div className='mainBodyStructure'>
          <div  className='sidebarStructure'>
              <Sidebar serverIp={SERVER_IP} />
          </div>
          <div className='mainViewStructure'>
             <MainView serverIp={SERVER_IP} />
          </div>
      </div>
  )
}

export default App
