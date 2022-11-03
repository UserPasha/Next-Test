import React, {FC} from 'react';
import styled from "styled-components";
import Link from "next/link";

const StyledNavLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: #999;
`

interface IProps {
    text: string
    href: string
}

const NavLink:FC<IProps> = ({text, href}) => {
    return (
        <StyledNavLink>
            <Link href={href}>{text}</Link>
        </StyledNavLink>
    );
};

export default NavLink;