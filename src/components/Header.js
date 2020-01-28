import React from "react";
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: black;
`
export default function Header() {
  return (
    <header className="ui centered">
      <Link href='/'><h1 className="ui center">Rick &amp; Morty Fan Page</h1></Link>
    </header>
  );
}
