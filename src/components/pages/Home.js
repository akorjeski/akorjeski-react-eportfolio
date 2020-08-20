import React from "react";
import dragonite from '../../dragonite.gif';
import githubicon from '../../githubicon.png';
import linkedinicon from '../../linkedinicon.png';
import portfolioicon from '../../portfolioicon.png';
import resumeicon from '../../resumeicon.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../app.css'
// import Waterdroplet from './waterdroplet';

function Home() {
  return (
    <div>
    <Container fluid="sm">

  <Row>
    <Col />
    <Col className="myphoto"><img src={dragonite} alt='dragonite' />
    <h1> Alex Korjeski </h1>
    
    </Col>
    <Col/>
  </Row>
  
  <Row>

<Col className="myphoto"><img src={githubicon} alt='githubicon' />
    <h4> Github </h4>
    
    </Col>
    <Col className="myphoto"><img src={linkedinicon} alt='githubicon' />
    <h4> LinkedIn </h4>
    
    </Col>
    </Row>
    <Row>
    <Col className="myphoto"><img src={resumeicon} alt='githubicon' />
    <h4> My Resume </h4>
    
    </Col>
    <Col className="myphoto"><img src={portfolioicon} alt='githubicon' />
    <h4> My Portfolio </h4>
    
    </Col>

  </Row>
</Container>
    </div>

  );
}

export default Home;
