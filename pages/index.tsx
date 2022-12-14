// import styled from '@emotion/react'
// const StyledDivHomeWrapper = styled.div``

import styled from "styled-components";
import LayoutWithNavBar from "../src/Components/LayoutWithNavBar/LayuoutWitnNavBar";

export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const Home = () => {
    return (

        <LayoutWithNavBar>
            <StyledAppWrapper>
                <h1>Hello Next!</h1>
            </StyledAppWrapper>
        </LayoutWithNavBar>

    )

}
export default Home