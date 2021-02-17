import React from "react";
import {Route, Switch} from 'react-router-dom';
import styled from "styled-components";

import Home from "./views/pages/Home";
import Template from "./views/components/Layout/Template";
import {GlobalStyle} from "./styled/Reset.Styled";

const App = () => {

    return (
        <Container>
            <GlobalStyle/>
            <Template>
                <Switch>
                    <Route path={'/'} component={Home}/>
                </Switch>
            </Template>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;