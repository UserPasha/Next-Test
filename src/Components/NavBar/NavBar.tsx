import React, {FC} from 'react';
import styled from "styled-components";
import NavLink from "../NavLink/NavLink";

const StyledNavBar = styled.div`
  width: 20%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //gap: 50px;
  border: 1px solid blue;
`

interface IProps {
}

const NavBar: FC<IProps> = () => {
    return (
        <StyledNavBar>
            <NavLink text={'Main'} href={'/'}/>
            <NavLink text={'Test'} href={'/test'}/>
        </StyledNavBar>
    );
};

export default NavBar;