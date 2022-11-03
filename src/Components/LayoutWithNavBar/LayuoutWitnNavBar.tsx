import React, {FC} from 'react';
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";

const StyledLayoutWithNavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  border: 5px solid #000;
`
interface IProps{
    children: React.ReactNode
}
const LayoutWithNavBar:FC<IProps> = ({children}) => {
    return (
        <StyledLayoutWithNavBar>
            <NavBar/>
            {children}
        </StyledLayoutWithNavBar>
    );
};

export default LayoutWithNavBar;