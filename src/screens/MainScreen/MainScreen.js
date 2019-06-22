import React, { Component } from 'react';

import UIManager from '../../managers/UIManager';

import ScreenContainer from '../ScreenContainer';
// import style from './style';

export default class MainScreen extends Component {
  render() {
    return (
      <ScreenContainer
        title="Main page"
        ref={ref => {
          UIManager.anchorPage(ref);
        }}
      >
        <div>Main</div>
      </ScreenContainer>
    );
  }
}
