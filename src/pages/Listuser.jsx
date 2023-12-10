import './App.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Novousuario } from '../components/fundoComponents/Novousuario';
import { Usuario } from '../components/fundoComponents/Usuario';
import { Adduser } from '../components/verticalComponents/svgComponents/Adduser';
import { Backcad } from '../components/fundoComponents/Backcad';
import { Backuser } from '../components/fundoComponents/Backuser';
import { Register } from '../components/verticalComponents/Register';
import { Mensagens } from '../layout/Mensagens';
import { Listercard } from '../Cards/Listercard';
import { Bar } from '../Cards/Bar/Bar';
import { Legenda } from '../components/fundoComponents/Legenda';
import { Legenda1 } from '../components/fundoComponents/Legend1';
import { Resultado } from '../components/fundoComponents/Resultado';


function Listuser() {
  
  const url = 'http://localhost:5000/pacientes';
  const [project, setProject] = useState([]);
  const location = useLocation()

  let message = ''
  if(location.state){
    message = location.state.message
  }

  useEffect(() => {
    
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then((data) => {
        setProject(data.pacientes)
      })
      .catch((err) => console.log(err))
  }, [])
  
  function removeProject(id) {

    fetch(`http://localhost:5000/paciente?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json' 
      },
    })
      .then(resp => resp.json())
      .then(data => {
        setProject(project.filter((project) => project.id !== id))
      //mensagem

      })
      .catch(err => console.log(err))
  }

  const cadastro = "AVALIAÇÃO CARDÍACA"

  return (
    <div>

      <div className='res'>
        <Resultado />
      </div>
      <div className='legend1'>
        <Legenda1 />
      </div>
      <div className='legend'>
        <Legenda/>

      </div>
      <div className='usuario'>
      
      </div>
      <div className='usuario'>
      <div className="fundo_reg" ></div>
      <div className='messagens'>
            {message && <Mensagens 
            type="success"
            msg={message}
            />}
      </div>
      </div>

      
      
      <div className='usuario'>
        <div className='supbar'>
          <Bar />
        </div>
      </div>
      <div className="usuario">
        <Link to="/">
          <Backcad />
        </Link>

        
      </div>

      <div className="usuario"> 
      <Backuser /> 
      </div>
      

      <div className="usuario">
        <Adduser />
      </div>

      <div className="cadicon">
        <Usuario />
      </div>

      
            
      <div className="cadbut">
        <Link to="/Listuser/Cadastrouser">
          <Novousuario />
        </Link>
        </div>
        
        
        <div className="usuario">
          <div className="newreg">
          <Link to="/">
            <Register
              cadastro={cadastro}
            />
          </Link>
          </div>
        </div>
        
      
      <div className='borda'>
      
        <div className='mensagem'>
              <div className='bar'>              
              {project.map((item) => (
              <Listercard
                id={item.id} 
                nome_usuario={item.nome_usuario}
                age={item.age}
                sex={item.sex}
                chest_pain={item.chest_pain}
                resting_blood_pressure={item.resting_blood_pressure}
                cholesterol={item.cholesterol}
                fasting_blood_glucose={item.fasting_blood_glucose}
                ecg_rest={item.ecg_rest}
                maximum_fcm={item.maximum_fcm} 
                result={item.result} 
                key={item.id}
                handleRemove={removeProject}
              />
            ))} 
          </div>
        </div>
      </div>     
    </div>
    
  );
}

export default Listuser;