import {Servico} from './svgComponents/Servico';

export const Servicos = (props) => {
    return (
        <div className="servico">
            <div className="serve">
                <Servico />
            </div>
            {props.servico}
        </div>
    );
}