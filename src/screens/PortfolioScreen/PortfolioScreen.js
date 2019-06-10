import React, { Component } from 'react';

import UIManager from '../../managers/UIManager';

import ScreenContainer from '../ScreenContainer';
// import style from './style';

export default class PortfolioScreen extends Component {
  render() {
    return (
      <ScreenContainer title="Portfolio page" ref={ref => {
        UIManager.anchorPage(ref);
      }}>
        <div>
          Portfolio
        </div>
      </ScreenContainer>
    );
  }
}
