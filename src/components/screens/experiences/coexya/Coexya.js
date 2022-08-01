import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

function Coexya() {
    return (
        <motion.div 
            className="containerRelatedToMain"
            initial = {{width: 0}}
            animate = {{width: "100%", transition: {duration: 0.2}}}
            exit = {{x: window.innerWidth, transition: {duration: 0.2}}}
        >
            <h1>Coexya - un jour une histoire</h1>

            <Outlet/>
        </motion.div>
    )
}

export default Coexya;