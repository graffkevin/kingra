import '../styleHome.css'
import { itemsMainHome } from '../../../content/db/itemsMainHome';
import { itemsSkillsHome } from '../../../content/db/itemsSkillsHome';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function ContentHome() {

    return (

        <div className = 'brandHome'>
            {itemsMainHome.map( ({ title, subTitle, about, details }) =>   
                (
                    <>
                        <div key = {title}>
                            <Row>
                                <h1 className='titleHome'>{title}</h1>
                                <h2 className='subtitleHome'>{subTitle}</h2>
                            </Row>
                        </div>   
                        
                    
                    
                        <div className = 'contentItemsHome'>
                            <Row>
                                <p>{about}</p>
                                <p>{details}</p>
                            </Row>
                        </div>
                    </>
                )
            )}

            <Container>
                <Row>
                    {itemsSkillsHome.map( ({skill, image}) => (
                            <Col className = 'colSkillHome'> 
                                <div className = 'skillRowContent'>
                                    <img src={image} alt='img'/>
                                    <p className ='skillTextContent'>{skill}</p> 
                                </div>
                                              
                            </Col>
                        )
                    )}; 
                </Row>
            </Container>
            
            <div className='homeButtonContainer'>
                <Row  className="justify-content-md-center">
                    <Col sm lg="4">
                        <Link to="/parcours">
                            <button className='buttonHome'>
                                <p className='txtButtonHome'>
                                    Mes projets
                                </p>
                            </button>
                        </Link>
                        
                    </Col>
                    <Col sm lg="4">
                        <Link to="/contact">
                            <button className='buttonHome'>
                                <p className='txtButtonHome'>
                                    Me contacter
                                </p>
                            </button>
                        </Link>
                        
                    </Col>
                </Row>
            </div>         
        </div>
    )
};

export default ContentHome;
