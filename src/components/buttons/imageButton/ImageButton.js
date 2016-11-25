import React, { Component, PropTypes } from 'react';
import css from './ImageButton.less';
import FlatButton from '../flat/FlatButton';

export default class ImageButton extends Component {
  static propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    bg: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'danger']),
  }

  static defaultProps = {
    color: 'auto',
    bg: '#444',
    size: '1',
    label: null,
    className: '',
    onClick() { },
    type: 'primary',
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatButton className={this.props.className} type={this.props.type}
        onClick={this.props.onClick}>
        <i className={'fa ' + this.props.icon + ' fa-fw'} style={{ color: this.props.color }}></i>
        {this.props.label}
      </FlatButton>
    );
  }
}
