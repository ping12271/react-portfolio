import React from "react";
import styled from "styled-components";

const WorksItem = ({image, title, description, tags, url}) => {

  return (
    <Container>
        <Thumb>
            <img src="" alt=""/>
        </Thumb>
        <Description>
            <h3></h3>
            <p>{description}</p>
        </Description>
        <Tags>
            {tags.map}
        </Tags>
    </Container>
  )
}

const Container = styled.div`

`;

export default WorksItem;