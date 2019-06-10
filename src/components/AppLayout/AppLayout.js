import React, { Component } from 'react';
import UIManager from '../../managers/UIManager';

import './style';

export default class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.pageRef = React.createRef();
  }

  handleLinkClick = (link) => {
    UIManager.openPage(link);
  }

  render() {
    const { children } = this.props;
    const [navbar, content] = children;
    const nav = React.cloneElement(navbar, { onHandleClick: this.handleLinkClick });

    return (
      <div className="app-layout">
        {nav}
        {content}
      </div>
    );
  }
}
