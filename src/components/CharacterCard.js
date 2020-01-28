import React from "react";
import styled from 'styled-components';


const Div = styled.div`
  margin: 5px;
  padding: 5px;
  background: #ccc;
`

export default function CharacterCard(props) {
  return (
    <Div>
      Name: {props.name}
      <br/>
      Gender: {props.gender}
    </Div>
  );
    }
