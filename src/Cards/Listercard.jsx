import styles from './Listercard.module.css';
import { Link } from 'react-router-dom';
import { Excluir } from './Bar/Excluir';
import { Editar } from './Bar/Editar';


export const  Listercard = ({id, nome_usuario, age, sex, chest_pain, resting_blood_pressure, cholesterol, fasting_blood_glucose, ecg_rest, maximum_fcm, result, handleRemove}) => {

    const remove = (event) => {
        event.preventDefault()
        handleRemove(id)
    }

    return (
   
           

        <table>
            <thead>
                
{/*         
                    <p >
                        
                            <th >
                                
                            </th>
                            <th >
                                
                            </th>
                            <th >
                                       
                            </th>
                            <th>
                                
                            </th>
                            <th>
                                
                            </th>
                            <th>
                                
                            </th>
                            <th>
                                
                            </th>
                            <th>
                                
                            </th>
                            <th>
                                
                            </th>
                            
                
                    </p> */}
                
                <tr className={styles.container}>
                    
                <td className={styles.container_card_name}>{nome_usuario}</td>
                <td className={styles.container_card_idade}>{age}</td>
                <td className={styles.container_card_sexo}>{sex}</td> 
                <td className={styles.container_card_dor_torax}>{chest_pain}</td>
                <td className={styles.container_card_pa}>{resting_blood_pressure}</td>
                <td className={styles.container_card_colesterol}>{cholesterol}</td>
                <td className={styles.container_card_glicose}>{fasting_blood_glucose}</td>
                <td className={styles.container_card_ecg}>{ecg_rest}</td>
                <td className={styles.container_card_fcm}>{maximum_fcm}</td>
                <td className={styles.container_card_resultado}>{result}</td>
                <td className={styles.container_card_editar}>
                <Link to={`/Listercard/${id}`}>
                        <Editar />
                    </Link> 
                </td>
                <td className={styles.container_card_remover}>
                    
                   <button onClick={remove}> 
                    <Excluir />
                    </button>
                </td>
                
                </tr>    
            </thead>  
       
        
        
        </table>
    );
}