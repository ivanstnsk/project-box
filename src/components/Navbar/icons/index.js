import React from 'react';

import CVIcon from './CV';
import PortfolioIcon from './Portfolio';
import SettingsIcon from './Settings';
import ContactsIcon from './Contacts';
import MainIcon from './Main';

export default function Icon({ name, active }) {
  let IconName = null;

  if (name === 'cv') {
    IconName = CVIcon;
  } else if (name === 'portfolio') {
    IconName = PortfolioIcon;
  } else if (name === 'settings') {
    IconName = SettingsIcon;
  } else if (name === 'contacts') {
    IconName = ContactsIcon;
  } else if (name === 'main') {
    IconName = MainIcon;
  }

  if (!IconName) {
    return null;
  }

  return <IconName active={active} />;
}
