import {Person} from './svgBarra/Person';
import {Notification} from './svgBarra/Notification';
import {Search} from './svgBarra/Search';


export const Username = () => {
    return (
        <div className="text_name">

                <div className="busca">
                    <Search />
                </div>
                <div className="notifica">
                    <Notification />
                </div>
                <div className="name">                   
                José Ribamar da Silva Costa Neto
                </div>
                <div className="ico">
                    <Person />
                </div>
                

        </div>
    );
}