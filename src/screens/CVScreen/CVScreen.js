import React, { Component } from 'react';

import UIManager from '../../managers/UIManager';

import ScreenContainer from '../ScreenContainer';
// import style from './style';

export default class CVScreen extends Component {
  render() {
    return (
      <ScreenContainer
        title="CV page"
        ref={ref => {
          UIManager.anchorPage(ref);
        }}
      >
        <div>CV</div>
      </ScreenContainer>
    );
  }
}
