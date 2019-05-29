import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ScreenSwitch from './ScreenSwitch';
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
          <ScreenSwitch location={location} key="container">
            <Route path="/" exact component={MainScreen} />
            <Route path="/contacts" component={ContactsScreen} />
            <Route path="/cv" component={CVScreen} />
          </ScreenSwitch>
        ]}
      />
    </Router>
  );
}
