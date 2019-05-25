import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ScreenContainer from './ScreenContainer';
import MainScreen from './MainScreen';
import ContactsScreen from './ContactsScreen';
import CVScreen from './CVScreen';

export default function AppRouter() {
  return (
    <Router>
      <Route
        render={({ location }) => [
          <div key="header">
            <Link to="/contacts">Contacts</Link>
            <Link to="/cv">CV</Link>
            <Link to="/">Main</Link>
          </div>,
          <ScreenContainer location={location} key="container">
            <Route path="/" exact component={MainScreen} />
            <Route path="/contacts" component={ContactsScreen} />
            <Route path="/cv" component={CVScreen} />
          </ScreenContainer>
        ]}
      />
    </Router>
  );
}
