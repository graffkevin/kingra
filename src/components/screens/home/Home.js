import React from 'react';
import ContentHome from './child-home/ContentHome';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';
import './styleHome.css';

function Home() {

    return (
        <motion.div
            initial = {{opacity: 0}}
            animate = {{opacity: 1, transition: { duration: 0.5 }}}
            exit = {{opacity: 0}}
        >
            <Container>   
                <ContentHome />
            </Container>
        </motion.div>

    )
};

export default Home;
