import React, { Component, PropTypes } from 'react';
// import MyCompo from './components/MyCompo';
import css from './icon-awesome-circle.less';

export default class IconAwesomeCircle extends Component {
  static propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    bg: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    color: 'white',
    bg: '#444',
    size: '1',
    label: null,
    className: '',
    onClick() {},
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className={'fa-stack fa-' + this.props.size + 'x ' + css.icon + ' ' + this.props.className}
            onClick={this.props.onClick}>
        <i className={'fa fa-circle fa-stack-2x'} style={{color: this.props.bg}}></i>
        <i className={'fa fa-stack-1x ' + this.props.icon} style={{color: this.props.color}}></i>
      </span>
    );
  }
}
