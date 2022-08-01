import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

function Cci() {
    return (
        <motion.div 
            className="containerRelatedToMain"
            initial = {{width: 0}}
            animate = {
                {
                    width: "100%", 
                    transition: {duration: 0.2},
                }
            }
            exit = {{x: window.innerWidth, transition: {duration: 0.2}}}
        >
            <h1>La CCI IDF - # Dinosaure</h1>

            <Outlet/>
        </motion.div>
    )
}

export default Cci;