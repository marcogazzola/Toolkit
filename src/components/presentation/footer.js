import './footer.less';
import React, { Component, PropTypes } from 'react';
import H from '../typography/heading/H';

export default class Footer extends Component {
  render() {
    const { showCopyright, appOwner, textSize } = this.props;
    const copyright = showCopyright ?
      <i className="fa fa-copyright fa-fw" />
      : null;
    const currYear = showCopyright ? `${new Date().getFullYear()} - ` : null;
    // return (
    //   <footer {...this.props} className="footer">
    //   <div className="container">
    //     <H s={textSize} inline deco="italic">{copyright}{currYear}{appOwner}
    //     </H>
    //     </div>
    //   </footer>
    // );
    return (
      <div className="footer">
      <div className="container text-muted credit">
        <H s={textSize} deco="italic" className="text-muted credit">{copyright}{currYear}{appOwner}
        </H>
      </div>
    </div>

    );
    }
}

// PropTypes validation
Footer.propTypes = {
  fixedBottom: PropTypes.bool,
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
  fixedBottom: true,
  appOwner: 'write here the app owner',
  textSize: 5,
};
