import React, { Component } from 'react';

import './style';

const W = document.body.offsetWidth;
const width = 0.1 * W;
const itemSide = 0.06 * W;
const itemShadow = 0.104 * W;
const itemMargin = 0.015 * W;

export default class Navbar extends Component {
  handleClick = (link) => {
    const { onHandleClick } = this.props;
    onHandleClick(link);
  }

  render() {
    const { items } = this.props;
    const style = {
      width,
    };
    const itemStyle = {
      width: itemSide,
      height: itemSide,
      borderRadius: itemSide / 2,
      boxShadow: `0px 0px ${itemShadow}px rgba(0, 0, 0, 0.15)`,
      marginBottom: itemMargin,
    };

    return (
      <div className="navbar" style={style}>
        {items.map(it => (
          <button key={it.link} className="navbar-item" style={itemStyle} onClick={() => this.handleClick(it.link)}>
            {it.label}
          </button>
        ))}
      </div>
    );
  }
}
