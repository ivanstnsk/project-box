import React, { Component, Fragment } from 'react';

import UIManager from '../../managers/UIManager';

import './style';

const W = document.body.offsetWidth;
const H = document.body.offsetHeight;
const marginTop = H * 0.02;
const marginRight = W * 0.018;

class ScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHiding: false,
      isContentVisible: false
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ isContentVisible: true });
    }, 300);
  }

  hide = () =>
    new Promise(resolve => {
      this.setState({ isHiding: true, isContentVisible: false });
      this.timer = setTimeout(() => {
        this.setState({ isContentVisible: true });
        resolve();
      }, 300);
    });

  handleClose = () => {
    console.log('closing');
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
    UIManager.resetReadyState();
  }

  render() {
    const { isHiding, isContentVisible } = this.state;
    const { children, title } = this.props;
    const containerClasses = ['main-container'];
    if (isHiding) {
      containerClasses.push('main-container-hide');
    } else {
      containerClasses.push('main-container-show');
    }
    const styles = {
      marginTop,
      marginRight
    };
    return (
      <div className="main-root">
        <div className={containerClasses.join(' ')} style={styles}>
          {!isHiding &&
            isContentVisible &&
            <Fragment>
              <div className="screen-container-header">
                <div className="screen-container-header-content">
                  {title}
                </div>
                {/* <button
                  className="screen-container-header-close"
                  onClick={this.handleClose}
                /> */}
                <div className="screen-container-header-underline" />
              </div>
              <div>
                {children}
              </div>
            </Fragment>}
        </div>
      </div>
    );
  }
}

export default ScreenContainer;
