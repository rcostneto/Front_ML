import { useState} from 'react';
import { Input } from "./Componentsform/Input";
import './Componentsform/Input.css';
import {Submitbutton} from './Componentsform/Submitbutton';



function Form ({btnText, handleSubmit}) {
    const [project, setProject] = useState({
        nome_usuario: '',
        age: '',
        sex: '',
        chest_pain: '',
        resting_blood_pressure: '',
        cholesterol: '',
        fasting_blood_glucose: '',
        ecg_rest: '',
        maximum_fcm: ''
});
    const submit = async (e) => {
        e.preventDefault()
        // const formData = new FormData(e.currentTarget);
        // for (let [key, value] of formData.entries()) {
        //     console.log(key, value);
        //   }
        handleSubmit(project)     
        // console.log(formData)
    }

    function handlechange (e) {
        setProject({...project, [e.target.name]: e.target.value,}); 

    };
    return (    
        <div className="usuario">
            <form onSubmit={submit} className="formulario">
                <div className="esquerda">
                    <div>
                        <div>
                            <Input 
                            type="text"
                            text="Nome do Usuário"
                            name="nome_usuario"
                            placeholder="Insira o seu nome"
                            handleOnChange={handlechange}
                            value={project.nome_usuario}
                            />
                        </div>

                        <div>
                            <Input 
                            type="text"
                            text="Idade"
                            name="age"
                            placeholder="Insira o sua idade"
                            handleOnChange={handlechange}
                            value={project.age}
                            />   
                        </div>

                        <div>
                            <Input 
                            type="text"
                            text="Sexo"
                            name="sex"
                            placeholder="Insira o seu sexo"
                            handleOnChange={handlechange}
                            value={project.sex}
                            />   
                        </div>
                    </div>

                        <div  className="lateral">
                            <div>   
                                <Input 
                                type="text"
                                text="Dor no Torax"
                                name="chest_pain"
                                placeholder="0 = assintomático, 1 = dor"
                                handleOnChange={handlechange}
                                value={project.chest_pain}
                                />
                            </div>

                            <div>
                                <Input 
                                type="text"
                                text="Pressão Arterial"
                                name="resting_blood_pressure"
                                placeholder="Insira a pressão sistólica em repouso"
                                handleOnChange={handlechange}
                                value={project.resting_blood_pressure}
                                />  
                            </div>

                            <div>
                                <Input 
                                type="text"
                                text="Colesterol"
                                name="cholesterol"
                                placeholder="Valor do Colesterol Total"
                                handleOnChange={handlechange}
                                value={project.cholesterol}
                                />
                            </div>

                            <div>
                                <Input 
                                type="text"
                                text="Glicose"
                                name="fasting_blood_glucose"
                                placeholder="Valor do Glicose em jejum"
                                handleOnChange={handlechange}
                                value={project.fasting_blood_glucose}
                                />
                            </div>

                            <div>
                                <Input 
                                type="text"
                                text="ECG"
                                name="ecg_rest"
                                placeholder="Eletrocardiograma em repouso(0 = assintomático, 1 = alterado)"
                                handleOnChange={handlechange}
                                value={project.ecg_rest}
                                /> 
                            </div>

                            <div>
                                <Input 
                                type="text"
                                text="FCM"
                                name="maximum_fcm"
                                placeholder="frequência cardíaca máxima alcançada"
                                handleOnChange={handlechange}
                                value={project.maximum_fcm}
                                />
                            </div>
                        </div>
                    <Submitbutton text={btnText}/>
                       
                </div>
                
            </form>
        </div>
        
    );
}

export default Form;