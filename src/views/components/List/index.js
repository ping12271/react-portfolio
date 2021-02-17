import React from "react";
import styled from "styled-components";
import InfoItem from "../Items/InfoItem";

const List = ({data, children}) => {

    return (
        <Container className={'List'}>
            {/*<Row>*/}
            {/*    {*/}
            {/*        data.map((item, index) =>*/}
            {/*            <Col>*/}
            {/*                {render(item, index) => {*/}

            {/*                }}*/}
            {/*            </Col>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</Row>*/}

        </Container>
    )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 15px;
`;

export default List;