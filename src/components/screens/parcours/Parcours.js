import { Chrono } from "react-chrono";
import itemsParcours from "../../content/db/itemsParcours";
import './styleParcours.css'

function Parcours() {

    return(

        <div className="chronoList">
            <Chrono 
                mode="VERTICAL_ALTERNATING" 
                items = {itemsParcours}
                enableOutline 
                useReadMore
                slideShow 
                slideItemDuration={4500}
                theme={{"primary":"#253E66","secondary":"#EF6555"}}
            />
            <div>
                coucou
            </div>
        </div>
    )
}

export default Parcours;