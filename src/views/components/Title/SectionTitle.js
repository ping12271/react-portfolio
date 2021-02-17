import React from "react";
import styled from "styled-components";

const SectionTitle = ({title, description}) => {

  return (
    <Container className={SectionTitle}>
        <h2>{title}</h2>
        {
            description &&
            <p>{description}</p>
        }
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  margin-bottom: 40px;
  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 26px;
    color: #333;
    text-transform: capitalize;
  }
  p {
    font-size: 16px;
    color: #777;
    font-weight: 400;
    line-height: 1.5;
    white-space: pre-wrap;
  }
`;

export default SectionTitle;