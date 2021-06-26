import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Garden from './components/garden/Garden'
import AddPlant from './components/garden/AddPlant'
import EditPlant from './components/garden/EditPlant'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import NavBar from './components/navbar/NavBar'

import Container from 'react-bootstrap/Container'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Container fluid >
          <Switch>
            <Route path="/addplant" component={AddPlant} />
            <Route path="/editplant/:id">
              <EditPlant />
            </Route>
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
