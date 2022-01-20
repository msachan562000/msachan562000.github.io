import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Technical Projects that I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/62155206/150293195-8676053e-ab9c-464e-a8b3-acffcf78ee19.png"
              title="Financorp"
              description="The idea of this project is to propose and develop a security system for implementing end-toend secured payment facility. As we know, Information and Communications Technology 
              plays a major part in connecting individuals and also helps in carrying out important tasks. 
              The result of this pandemic led the all the organizations to adopt online platforms. The 
              hackers and attackers have considered COVID-19 as a chance to dispatch assaults for 
              monetary benefits and leaking confidential information to earn gains"              link="https://github.com/msachan562000/ISAA-PROJECT"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/62155206/150293940-2987cbad-30e0-4783-8ac0-4de0786f5618.png"
              title="Smart-Bin"
              description="As technology becomes increasingly important in today's world, it is invaluable to not only learn about the technology, but also be able to apply it in various fields. We engineers must be able to use technological advancements to solve real life problems. Technology can be used in making things easier in every discipline.

              When mixed dry and wet waste breaks down in landfill, it creates nasty greenhouse gases.
              Segregating waste helps divert it from landfill ensuring it's recycled properly.
              Mixed dry waste such as glass and paper can be turned into new products.
              Effective segregation of wastes means that less waste goes to landfill which makes it cheaper and better for people and the environment."
              link="https://github.com/msachan562000/smart-bin/tree/master"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/62155206/150295724-4076589b-c8b8-4432-b3da-a6cd7c4e04b9.png"
              title="Train-Ticket Booking System"
              description="This website is mostly made to satisfy the following
              necessities:
               A data set that will store data of train schedules, booking information.
               An online platform that will give continuous data about the accessibility of
              tickets along with their costs.
               Every enlisted client can see his/her bookings that has been made in his/her
              customer ID.
               Every client can look through seat availability, cost of the ticket, arrival and
              departure time, distance among source and destination and can avail many
              other services.
               An easy payment gateway to confirm payment and book required train
              tickets.
               Overall, a healthy environment to book train tickets and avail the basic
              facilities of Indian Railways."              link="https://github.com/msachan562000/Train-Ticket-Booking-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
