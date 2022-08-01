import React from 'react';
import './styleFoot.css'
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images from '../content/assets/images';

function Footer() {
    return (
        <Navbar className ='footerHome' variant="dark" fixed="bottom">
            <Row className="justify-content-md-center">
                <Col xs lg="3">
                    <Row>
                        <p className='footerTxt'>Developed by <span className='footerName'>Kevin Graff</span></p>
                    </Row>
                    <Row className='footerDelimiter'>
                        <Col>
                            <img className = 'footerImg' src={images.github} alt='img'/>
                        </Col>
                        <Col>
                            <p className='footerTxtIcon'>Github</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs lg="3">
                    <Row>
                        <p className='footerTxt'>Designed by <span className='footerName'>Xavier Laborie</span></p>
                    </Row>
                    <Row>
                        <Col>
                            <img className = 'footerImg' src={images.behance} alt='img'/>
                        </Col>
                        <Col>
                            <p className='footerTxtIcon'>Behance</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='footerLast'>
                        © 2022 Kevin Graff
                    </p>
                </Col>
            </Row>
        </Navbar>
    )
}

export default Footer;