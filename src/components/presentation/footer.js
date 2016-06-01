import './footer.less';
import React, { Component, PropTypes } from 'react';
import H from '../typography/heading/H';

export default class Footer extends Component {
  render() {
    const { showCopyright, appOwner, textSize } = this.props;
    const copyright = showCopyright ?
      <i className="fa fa-copyright fa-fw"></i>
      : null;
    const currYear = showCopyright ? `${new Date().getFullYear()} - ` : null;
    return (
      <footer {...this.props}>
        <H s={textSize} inline deco="italic">{copyright}{currYear}{appOwner}
        </H>
      </footer>
    );
  }
}
// PropTypes validation
Footer.propTypes = {
  showCopyright: PropTypes.bool.isRequired,
  appOwner: PropTypes.string.isRequired,
  textSize: PropTypes.oneOfType([
    PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
    PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  ]),
};

// default props
Footer.defaultProps = {
  showCopyright: false,
  appOwner: 'pluto',
  textSize: 5,
};
