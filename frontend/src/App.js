import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Garden from './components/garden/Garden'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import NavBar from './components/navbar/NavBar'

import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Container fluid >
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" component={Garden} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
