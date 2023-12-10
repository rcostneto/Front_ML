import './App.css';
import { Link } from 'react-router-dom';
import {Cadusuario} from '../components/fundoComponents/Cadusuario';
import { Cadastroicon } from '../components/verticalComponents/svgComponents/Cadastroicon';
import { Regcadastro } from '../components/verticalComponents/Regcadastro';
import { Logout } from '../components/verticalComponents/Logout';




export const Registeruser = () => {

  const cadastro = "AVALIAÇÃO CARDÍACA"
  const sair = "SAIR"

  return (
    
    

      <div>

        <div className='usuario'>
        <div className="fundo_reg" />
        </div>
        
        <div className="usuario">
        
          <div className="cadnew">
          
          <Regcadastro
              cadastro={cadastro}
            />
            </div>
          <div className="regnew">
            
            <Cadastroicon/>
          </div>
        </div>

        <div className="cadicon">

        <Link to="/Listuser">
          <Cadusuario />
        </Link>   
            
        </div>
        <div className="usuario">
          <div className="outnew">
            <Logout
              sair={sair}
            />
          </div>
        </div>
        
      </div>
      
    
    
  );
}