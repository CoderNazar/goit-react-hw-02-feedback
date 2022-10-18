import React, { Component } from 'react';

class Text extends Component {
  static defaultProps = {};
  static propTypes = {};

  render() {
    const { children, className } = this.props;
    return <p className={className}>{children}</p>;
  }
}

export { Text };
