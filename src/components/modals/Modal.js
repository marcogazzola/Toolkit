import './modal.less';
import React, { Component, PropTypes } from 'react';
import { cn } from '../../utils/dom.js';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalStopPropagation = this.modalStopPropagation.bind(this);
  }

  componentDidMount() {
    this.enableBodyScroll(!this.props.open);
  }

  componentWillReceiveProps(props) {
    this.enableBodyScroll(!props.open);
  }

  componentWillUnmount() {
    this.enableBodyScroll(!this.props.open);
  }

  // Enable scroll on Body
  enableBodyScroll(value) {
    if (value) {
      document.body.className = '';
    } else {
      document.body.className += ' noscroll';
    }
  }

  // Avoid closing when click on the modal (just when click backdrop)
  modalStopPropagation(event) {
    event.stopPropagation();
  }

  render() {
    const { children, className, classNameBD, onBackDropClick, open } = this.props;
    if (!open) {
      return null;
    }

    return (
      <div
        className={cn('uimodal_blackout', classNameBD)}
        onClick={onBackDropClick}
      >
        <div
          className={cn('uimodal', className)}
          onClick={this.modalStopPropagation}
        > {children} </div>
      </div>
    );
  }
}


Modal.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool,
  className: PropTypes.string,
  classNameBD: PropTypes.string,
  onBackDropClick: PropTypes.func,
};

Modal.defaultProps = {
  onBackDropClick: {},
};
