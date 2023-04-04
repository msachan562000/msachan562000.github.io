import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mrigank Sachan </span>
            I am a Pre-Final Year Engineer from <span className="purple"> Lucknow, India.</span>
            <br />
            
            <br />I am pursuing my Bachelor's degree in Computer Science and Engineering with Specialization in Data Science from Vellore Institute of Technology,Vellore<br /> <br />
           <br />
            
            ⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS etc.
            <br />
           <br />
            <br />
            ⚡ Apart from this, I have done courses on Artificial Intelligence,Data Analytics,Data Structures and Algorithms and Full Stack Development .
 
          </p>
          
                                             <br /><br />
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
