import React from "react";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  background: #3ebdc2;
`;

/*
Darker teal color: #3EBDC2
Powder blue: #C0EEF0
*/

const Links = styled.div`
  display: flex;
  flex-direction: row; // changed from wrap to row
  justify-content: space-around;
  width: 25%;
`;
const HeaderLink = styled.h4``; // changed from h2 to h4

export function Navigation() {
  return (
    <Header className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <h1 className="navbar-brand" to={"/"}>
            CO-MAKE NEIGHBORHOOD
          </h1>
        </div>
        <Links className="nav navbar-nav">
          {/* <HeaderLink><NavLink exact to={'/'}>Home</NavLink></HeaderLink> */}
          <HeaderLink>
            <NavLink className="nav-links" to={"/SignUp"}>Sign-Up</NavLink> {/* added className for styling */}
          </HeaderLink>
          <HeaderLink>
            <NavLink className="nav-links" to={"/"}>Log In</NavLink> {/* added className for styling */}
          </HeaderLink>
        </Links>
      </div>
    </Header>
  );
}
export default Navigation;
