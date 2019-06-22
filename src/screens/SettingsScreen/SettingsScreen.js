import React from 'react';

import UIManager from '../../managers/UIManager';

import ScreenContainer from '../ScreenContainer';
// import style from './style';

export default function SettingsScreen() {
  return (
    <ScreenContainer
      title="Settings page"
      ref={ref => {
        UIManager.anchorPage(ref);
      }}
    >
      <div>Settings</div>
    </ScreenContainer>
  );
}
