import {Cadastro} from './svgComponents/Cadastro';


export const Register = (props) => {
    return (
        <div className="cadastro">
            <div className="reg">
                <Cadastro />
            </div>
            {props.cadastro}
        </div>
    );
}