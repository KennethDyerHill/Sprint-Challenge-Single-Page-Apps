import { BrowserRouter as Router, Route } from 'react-router-dom';


import React from "react";
import Header from "./components/Header.js";
import styled from 'styled-components';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage'

const Container = styled.div`
  margin: auto;
`


export default function App() {
  return (
    <Router>
      <Container>
        <Header />
        
        <main>
          <Route exact path='/' render={props => (
            <React.Fragment >
              <WelcomePage />
            </React.Fragment>
          )} />
          <Route path='/characterList' component={CharacterList} />
        </main>
      </Container>

    </Router>

  );



}
