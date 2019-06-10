import React, { Component } from 'react';

import UIManager from '../../managers/UIManager';

import ScreenContainer from '../ScreenContainer';
// import style from './style';

export default class SettingsScreen extends Component {
  render() {
    return (
      <ScreenContainer title="Settings page" ref={ref => {
        UIManager.anchorPage(ref);
      }}>
        <div>
          Settings
        </div>
      </ScreenContainer>
    );
  }
}
