import React from "react";
import styled from "styled-components";

const Nav = (props) => {

    const {routes} = props;

  return (
    <Container>
        {
            routes.map((item, index) => {
                return (
                    <NavItem kye={index}>{item.name}</NavItem>
                )
            })
        }
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 10px;
  margin: 0 10px;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 16px;
  color: #333;
  font-weight: 400;
  &:hover {
    color: #18f;
  }
`;

export default Nav;