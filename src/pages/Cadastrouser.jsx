import { useNavigate } from 'react-router-dom';
import'./App.css';
import { Link } from 'react-router-dom';
import { Register } from '../components/verticalComponents/Register';
import { Usuarionovo } from '../components/verticalComponents/svgComponents/Usuarionovo';
import { Backcad } from '../components/fundoComponents/Backcad';
import { Backuser } from '../components/fundoComponents/Backuser';
import { Backnewuser } from '../components/fundoComponents/Backnewuser';
import { Titulousuario } from '../components/fundoComponents/Titulousuario';
import { Adicionausuario } from '../components/verticalComponents/svgComponents/Adicionausuario';
import Form from '../components/Form/Form';


export const Cadastrouser = () => {

    const navigate = useNavigate();

    async function createPost(project) {

    //começando a montar o corpo da requisição em form-data
    const formData = new FormData();
    formData.append('nome_usuario', project.nome_usuario);
    formData.append('age', project.age);
    formData.append('sex', project.sex);
    formData.append('chest_pain', project.chest_pain);
    formData.append('resting_blood_pressure', project.resting_blood_pressure);
    formData.append('cholesterol', project.cholesterol);
    formData.append('fasting_blood_glucose', project.fasting_blood_glucose);
    formData.append('ecg_rest', project.ecg_rest);
    formData.append('maximum_fcm', project.maximum_fcm);

    let url = 'http://127.0.0.1:5000/paciente';
    fetch(url, {
        method: 'post',
        body: formData // enviando as informações no corpo da requisição
    
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
              //redirect    
              navigate("/Listuser", {state:{ message: "Diagnóstico realizado com sucesso!" }});
        })
        .catch((error) => {
        console.error('Error:', error);
        
        });
    }

    //     // inicializando cadastro e servicos
        // project.cad = 0
    //     // project.services = []
    

    //     fetch('http://127.0.0.1:5000/paciente', {
            
    //         method: "POST",
    //         headers: {
    //             'accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
            
    //         body: JSON.stringify(project)
            
    //     })
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             console.log(data)
    // //             //redirect            
                
    //         })
    //         .catch(err => console.log(err))
        
    
    const cadastro = "PROBLEMAS CARDÍACOS"

    return (
        <div>

            <div className='usuario'>
                <div className="fundo_reg" >
                    
                </div>
            </div>

            <div className="cadicon">
                <Titulousuario />
            </div>

            <div className="usuario">
                
                <Backnewuser />
                
            </div>

            <div className="usuario">
                <Link to="/">
                    <Backcad />
                </Link>
            </div>

            <div className="usuario">
                <Link to="/Listuser">
                <Backuser />
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

            <div className="usuario">
                <Link to="/Listuser">
                    <Usuarionovo />
                </Link>
            </div>

            <div className="cadicon">
                
                <Adicionausuario />
                
            </div>

            <Form handleSubmit = {createPost} btnText="EXAMINAR" />

        </div>
    );
}