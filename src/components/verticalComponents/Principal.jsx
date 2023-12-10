import {Home} from './svgComponents/Home';

export const Principal = (props) => {
    return (
        <div className="home">
            <div className="casa">
                <Home />
            </div>
            {props.nome}

            
            
        </div>
    );
}