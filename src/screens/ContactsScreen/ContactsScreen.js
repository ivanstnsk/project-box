import React, { Component } from 'react';

import UIManager from '../../managers/UIManager';

import ScreenContainer from '../ScreenContainer';
// import style from './style';

export default class ContactsScreen extends Component {
  render() {
    return (
      <ScreenContainer title="Contacts page" ref={ref => {
        UIManager.anchorPage(ref);
      }}>
        <div>
          Contacts
        </div>
      </ScreenContainer>
    );
  }
}
