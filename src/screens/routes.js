import React from 'react';
import { Router, Route } from 'react-router-dom';
import UIManager from '../managers/UIManager';

import ScreenSwitch from './ScreenSwitch';
import MainScreen from './MainScreen';
import ContactsScreen from './ContactsScreen';
import CVScreen from './CVScreen';
import PortfolioScreen from './PortfolioScreen';
import SettingsScreen from './SettingsScreen';
import AppLayout from '../components/AppLayout';
import Navbar from '../components/Navbar';

const pages = [
  { label: 'CV', link: 'cv' },
  { label: 'Main', link: '/' },
  { label: 'Portfolio', link: 'portfolio' },
  { label: 'Contacts', link: 'contacts' },
  { label: 'Settings', link: 'settings' },
];

export default function AppRouter() {
  return (
    <Router history={UIManager.history}>
      <Route
        render={({ location }) => (
          <AppLayout>
            <Navbar items={pages} key="navbar" />
            <ScreenSwitch location={location} key="container">
             <Route path="/" exact component={MainScreen} />
             <Route path="/contacts" component={ContactsScreen} />
             <Route path="/cv" component={CVScreen} />
             <Route path="/portfolio" component={PortfolioScreen} />
             <Route path="/settings" component={SettingsScreen} />
            </ScreenSwitch>
          </AppLayout>
        )}
      />
    </Router>
  );
}
