import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import style from './style';

export default class ScreenSwitch extends Component {
  render() {
    return (
      <TransitionGroup className="screen-container">
        <CSSTransition
          key={this.props.location.key}
          timeout={{ enter: 200, exit: 200 }}
          classNames="fade"
        >
          <Switch location={this.props.location}>{this.props.children}</Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
