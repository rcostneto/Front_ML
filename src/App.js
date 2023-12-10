import './pages/App.css';
import { Outlet } from 'react-router-dom';
import {Barra} from './components/Barra';
import {Verticalbar} from './components/Verticalbar';



function App () {

  return (
    <div>
      
      <Outlet  />
      <Barra />
      
      <div className="Verticalbar">
        <Verticalbar /> 
        
        
        
          
            
        </div>


      
    </div>
    
  );
}

export default App;





