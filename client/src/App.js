import React, { Fragment, } from 'react';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import { Container } from "semantic-ui-react";

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;