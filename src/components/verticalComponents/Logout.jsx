import {Sair} from './svgComponents/Sair';


export const Logout = (props) => {
    return (
        <div className="sair">
            <div className="out">
                <Sair />
            </div>
            {props.sair}
        </div>
    );
}