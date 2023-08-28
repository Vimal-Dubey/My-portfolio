import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import coffee from "../../Assets/Projects/coffee.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coffee}
              isBlog={false}
              title="Buy Me A Coffee dapp"
              description="The BuyMeACoffee dApp (decentralized application) is designed to enable users to send small amounts of cryptocurrency, typically Ether (ETH) in the case of Ethereum-based dApps, as a way of supporting content creators or other individuals in a similar manner to buying a virtual cup of coffee for them. The dApp
              integrates with a smart contract deployed on the Ethereum blockchain, which facilitates the transaction process."
              demoLink="https://buymeacoffee-solidity-defi-tipping-app--vimaldubey1.repl.co/"
              ghLink="https://github.com/Vimal-Dubey"

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Random Joke Generator"
              description="An entertaining and light-hearted web application that brings laughter to users with its amusing collection of random jokes. Developed using simple HTML, CSS, and JavaScript, this project showcases the power of APIs to fetch and display humorous content dynamically."
              ghLink="https://github.com/Vimal-Dubey/Random-joke-generator"
              demoLink="https://vimal-dubey.github.io/Random-joke-generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ECDSA Node"
              description="This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.
              However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address."
              ghLink="https://github.com/Vimal-Dubey/ECDSA-Node"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Quiz-App"
              description="The React Quiz Web App is an interactive and time-bound quiz application designed to test users' knowledge. This web application offers an engaging and challenging experience, presenting users with a series of questions within a specified time limit. After completing the quiz, users receive their performance."
              ghLink="https://github.com/Vimal-Dubey/Quiz-App"
              demoLink="https://quiz-project-by-vimal.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Drum-Kit"
              description="This is a simple drum kit application implemented in JavaScript that allows users to play drum sounds by pressing corresponding keys on their keyboard. The drum kit replicates the experience of playing a virtual set of drums, providing a fun and interactive way to create rhythmic beats."
              ghLink="https://github.com/Vimal-Dubey/Drum-kit/tree/master"
              demoLink="https://vimal-dubey.github.io/Drum-kit/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
