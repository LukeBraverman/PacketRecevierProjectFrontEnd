import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import MainView from "./components/mainview/MainView.tsx";

function App() {

  return (
      <div style={{display: 'flex', height: '100vh', width: '100vw', flexDirection: 'row'}}>
          <div  style={{flex: 1, position: "sticky"}}>
              <Sidebar/>
          </div>
          <div style={{flex: 4, backgroundColor: '#f9f9f9', height: '100%', display: 'flex',
          justifyContent: 'center', alignItems: 'start', paddingTop: '10px'}}>

             <MainView />


          </div>
      </div>
  )
}

export default App
