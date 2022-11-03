import React, {FC} from 'react';
import styled from "styled-components";
import LayoutWithNavBar from "../src/Components/LayoutWithNavBar/LayuoutWitnNavBar";
import {StyledAppWrapper} from "./index";


interface IProps {
}

const StyledTest:FC<IProps>  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  border: 5px solid #000;
`

const Test = () => {
    return (
        <LayoutWithNavBar>
            <StyledAppWrapper>
                <h1>TEST</h1>
            </StyledAppWrapper>
        </LayoutWithNavBar>
    );
};

export default Test;