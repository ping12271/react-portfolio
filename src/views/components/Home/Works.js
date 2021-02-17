import React from "react";
import styled from "styled-components";
import SectionTitle from "../Title/SectionTitle";
import {ContentContainer} from "../Layout/Layout.styled";
import appData from "../../../data";

const Works = () => {

  return (
    <Container>
        <ContentContainer>
            <SectionTitle title={appData.works.title} description={appData.works.description} />
        </ContentContainer>
    </Container>
  )
}

const Container = styled.div`

`;

export default Works;