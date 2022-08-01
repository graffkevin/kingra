import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

import useCollapse from 'react-collapsed';
import { useReduceMotion } from 'react-reduce-motion';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './styleThesis.css'

import Abstract from './child-thesis/Abstract';
import Manuscrit from './child-thesis/Manuscrit';

function Thesis() {

    const reduceMotion = useReduceMotion()

    let { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        hasDisabledAnimation: reduceMotion,
        expandStyles: { 
            height: '100%'
        }
    });


     return (
        <motion.div 
            className="motionDivContainer"
            initial = {{width: 0}}
            animate = {{width: "100%", height:'100%', transition: {duration: 0.2}}}
            exit = {{x: window.innerWidth, transition: {duration: 0.2}}}
        > 
            <h1 className='titleContainer'>Thèse de doctorat</h1>

            <Container  fluid="md">
                <Row xs={1} md={2}>
                    <Col>
                        <Abstract />
                        <Button variant="info" className = 'buttonCollapse'
                            {...getToggleProps()}
                        >
                            {isExpanded ? 'Cacher' : 'Manuscrit'}
                        </Button>
                    </Col>
                
                    <Col>  
                        <div {...getCollapseProps()}>
                            <Manuscrit />
                        </div>
                    </Col>
                </Row>
            </Container>
           

            <Outlet/>
        </motion.div>
    )
}

export default Thesis;