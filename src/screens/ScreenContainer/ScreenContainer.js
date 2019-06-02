import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import './style';

const W = document.body.offsetWidth;
const H = document.body.offsetHeight;
const marginTop = H * 0.02;
const marginRight = W * 0.018;
const marginLeft = W * 0.1;

class ScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHiding: false,
      isContentVisible: true,
    };
  }

  hide = () => {
    return new Promise((resolve, reject) => {
      this.setState({ isHiding: true, isContentVisible: false });
      setTimeout(() => {
        this.setState({ isContentVisible: true });
        resolve();
      }, 300);
    })
  }

  async goTo(link) {
    await this.hide();
    const { history } = this.props;
    history.push(link);
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
      marginRight,
      marginLeft,
    }
    return (
      <div className="main-root">
        <div className={containerClasses.join(' ')} style={styles}>
          {!isHiding && isContentVisible && (
            <>
              <div className="screen-container-header">
                {title}
                <div className="screen-container-header-underline" />
              </div>
              <div>
                <button onClick={() => this.goTo('/contacts')}>To contacts</button>
                <button onClick={() => this.goTo('/cv')}>To cv</button>
                <button onClick={() => this.goTo('/')}>To main</button>
                {children}
              </div>
            </>
          )
          }
        </div>
      </div>
    );
  }
}

export default withRouter(ScreenContainer);
// export default ScreenContainer;