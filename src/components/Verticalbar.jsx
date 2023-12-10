import {Principal} from './verticalComponents/Principal';
import {Servicos} from './verticalComponents/Servicos';


export const Verticalbar = () => {
    
    const nome = "PRINCIPAL"
    const servico = "SERVIÇOS"
    
    return (
        <div  className="Verticalbar">

            <Principal 
                nome={nome}
            />
            <Servicos
                servico={servico}
            />
            
        </div>
            
    );
}