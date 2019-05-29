import React, { Component } from 'react';

import style from './style';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHiding: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isHiding: true })
    }, 1000);
}

  hide() {
    this.setState({ isHiding: true });
  }

  render() {
    const { isHiding } = this.state;
    const containerClasses = ['main-container'];
    if (isHiding) {
      containerClasses.push('main-container-hide');
    }
    return <div className="main-root">
      <div className={containerClasses.join(' ')}>Main</div>
    </div>;
  }
}
