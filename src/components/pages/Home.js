import React from "react";
import dragonite from '../../dragonite.gif';
import githubicon from '../../githubicon.png';
import linkedinicon from '../../linkedinicon.png';
import portfolioicon from '../../portfolioicon.png';
import resumeicon from '../../resumeicon.png';
import MyResume from './myresume.pdf';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../app.css'
// import Waterdroplet from './waterdroplet';

function Home() {
  return (
    <div>
      <Container fluid="md">

        <Row>
          <Col />
          <Col className="myphoto"><img src={dragonite} alt='dragonite' />
            <h1> Alex Korjeski </h1>
          </Col>
          <Col />
        </Row>


        <Row>
          <Col />
          <Col className="myphoto">
            <a href='https://github.com/akorjeski'><img src={githubicon} alt='githubicon' /> </a>
            <h4> Github </h4>
            <a href='https://www.linkedin.com/in/alexander--korjeski/'><img src={linkedinicon} alt='linkedinicon' /></a>
            <h4> LinkedIn </h4>
            <a href={MyResume}><img src={resumeicon} alt='resumeicon' /> </a>
            <h4> My Resume </h4>
            <img src={portfolioicon} alt='portfolioicon' />
            <h4> My Portfolio </h4>
          </Col>

          <Col />
        </Row>
      </Container>
    </div>

  );
}

export default Home;
