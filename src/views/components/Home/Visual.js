import React from "react";
import styled from "styled-components";

const Visual = ({title, image}) => {

  return (
    <Container image={image}>
      <Contents>
        <h1>{title}</h1>
      </Contents>


    </Container>
  )
}


const Container = styled.div`
  height: 100vh;
  background: #eee url(${props => props.image}) 50% / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  h1 {
    font-size: 20px;
    color: #333;
    font-weight: 500;
    white-space: pre-wrap;
  }
`;

export default Visual;