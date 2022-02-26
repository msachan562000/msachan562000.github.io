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
          <h3>My Introduction in Spanish!!! (shhh.. 🤫 I've Just Started Learning Spanish!)</h3><br /><br />
<p> Hola a todos, soy Mrigank Sachan, soy un ingeniero de último año de Lucknow, India.
<br /><br />
Estoy cursando mi licenciatura en informática e ingeniería con especialización en ciencia de datos del Instituto de Tecnología de Vellore, Vellore.
<br /><br />

⚡ He estudiado temas básicos de ingeniería de software como DS, Algoritmos, DBMS, OS, etc.
<br /><br />

⚡ Aparte de esto, he realizado cursos de Inteligencia Artificial, Analítica de Datos, Estructuras de Datos y Algoritmos y Desarrollo Full Stack.</p>
                                             <br /><br />
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
