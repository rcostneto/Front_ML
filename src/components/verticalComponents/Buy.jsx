import {Compras} from './svgComponents/Compras';

export const Buy = (props) => {
    return (
        <div className="compra">
            <div className="buy">
                <Compras />
            </div>
            {props.compras}
        </div>
    );
}