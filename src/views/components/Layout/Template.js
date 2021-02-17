import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const Template = ({children}) => {

  return (
    <Container>
        <Header/>
            {children}
        <Footer copyrights={'copyrights'}/>
    </Container>
  )
}

const Container = styled.div`

`;

export default Template;