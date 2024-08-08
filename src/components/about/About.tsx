import React from "react";
import styled from "styled-components";
import meImage from "../../assets/me.jpg"; // Adjust the path as needed

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  border-radius: 8px;
  background-size: cover;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start; /* Align items to the start of the container */
  padding: 40px; /* Add padding for better spacing */
`;

const ColumnImage = styled.div`
  flex: 1;
  max-width: 500px;

  img {
    width: 100%;
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition:
      transform 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    }
  }
`;

const Content = styled.div`
  flex: 2;
  max-width: calc(100% - 540px);

  h2 {
    font-size: 26px;
    margin-top: 20px;
    color: #f1f1f1;
    font-family: "Arial", sans-serif;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    line-height: 1.8;
    margin-bottom: 20px;
    color: #e0e0e0;
    text-align: justify;
    position: relative; /* Ensure pseudo-element is positioned correctly */
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
  }

  p::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2); /* Subtle overlay for hover effect */
    z-index: -1; /* Place it behind the text */
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  p:hover::before {
    opacity: 1;
  }
`;

const About: React.FC = () => {
  return (
    <Container>
      <Row>
        <ColumnImage>
          <img src={meImage} alt="Gilbert photo" />
        </ColumnImage>
        <Content>
          <h2>About Me</h2>
          <p>
            Hello! I’m Peixuan Sun, a dedicated full stack web developer, eager
            to bring creativity and fresh ideas to the digital world. While I
            may be new to the field, my commitment to learning and building
            beautiful, functional websites and applications is boundless. From
            front-end design to back-end development, I’m focused on mastering
            every aspect of web development to create seamless and engaging user
            experiences.
          </p>
          <h2>What Drives Me</h2>
          <p>
            I am driven by the desire to craft visually stunning and
            user-friendly websites and applications that not only captivate the
            audience but also deliver an exceptional user experience. The
            ever-evolving nature of web technologies inspires me to stay curious
            and continuously enhance my skills.
          </p>
          <h2>Skills and Expertise</h2>
          <p>
            With a strong foundation in HTML, CSS, and JavaScript, I specialize
            in creating responsive and modern websites and applications. I am
            well-versed in utilizing frameworks like Bootstrap to ensure
            cross-browser compatibility and a consistent design across various
            devices.
          </p>
          <h2>Projects and Experience</h2>
          <p>
            Throughout my journey, I've had the privilege to work on diverse
            projects, ranging from personal blogs to e-commerce platforms. These
            experiences have equipped me with a comprehensive understanding of
            the web development landscape, allowing me to tackle challenges with
            creativity and ingenuity.
          </p>
        </Content>
      </Row>
    </Container>
  );
};

export default About;
