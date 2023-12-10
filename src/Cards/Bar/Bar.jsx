import styles from './Bar.module.css';

export const Bar = () => {
    return (
        
            <table>
                
                <thead>
                
                    <tr className={styles.bar}>
                    
                    <td className={styles.conteiner_bar_nome}>
                        Nome
                    </td>

                    <td className={styles.conteiner_bar_idade}>
                        Idade
                    </td>

                    <td className={styles.conteiner_bar_sexo}>
                        Sexo
                    </td>

                    <td className={styles.conteiner_bar_torax}>
                        Dor_Torax
                    </td>

                    <td className={styles.conteiner_bar_pa}>
                        PA
                    </td>

                    <td className={styles.conteiner_bar_colesterol}>
                        Colesterol
                    </td>

                    <td className={styles.conteiner_bar_glicose}>
                        Glicose
                    </td>

                    <td className={styles.conteiner_bar_ecg}>
                        ECG
                    </td>

                    <td className={styles.conteiner_bar_fcm}>
                        FCM
                    </td>

                    <td className={styles.conteiner_bar_resultado}>
                        Resultado
                    </td>

                    <td className={styles.conteiner_bar_edit}>
                        Editar
                    </td>

                    <td className={styles.conteiner_bar_remove}>
                        Excluir
                    </td>
                
                    
                                
                    </tr>
                    
                </thead>
                {/* <tbody>
                    
                </tbody> */}
                </table>
  

        
    );
}