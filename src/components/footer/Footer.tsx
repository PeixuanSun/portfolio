// src/components/Footer/Footer.tsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterStyled = styled.footer`
  text-align: center;
  font-size: 12px;
  color: white;
  background-color: rgb(13, 13, 13);
  padding: 10px;

  a {
    color: rgb(5, 151, 248);
    font-size: 20px;
    padding: 10px;
    text-decoration: none;
  }

  a:hover {
    color: white;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact</Link>
      <p>Copyright © 2023 My Portfolio</p>
      <p>Peixuan Sun</p>
    </FooterStyled>
  );
};

export default Footer;
