import React, { Component, PropTypes } from 'react';
import './separator.less';
import { cn } from '../../../utils/dom.js';

export default class Separator extends Component {

  render() {
    const { color, padding } = this.props;
    const styles = {
      marginTop: padding || 0,
      marginBottom: padding || 0,
    };

    if (color) { styles.borderBottomColor = color; }

    return (
      <div className={cn('separator')} style={styles}></div>
    );
  }
}


Separator.propTypes = {
  color: PropTypes.string,
  padding: PropTypes.number,
};

Separator.defaultProps = {
  color: '#222',
};
