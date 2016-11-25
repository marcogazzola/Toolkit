import React,{ Component, PropTypes } from 'react';
import css from './icon-awesome-stacked.less';

export default class IconAwesomeStacked extends Component {
  static propTypes = {
    color: PropTypes.string,
    bg: PropTypes.string,
    label: PropTypes.string,
    stackIcon: PropTypes.oneOf(['fa-circle', 'fa-circle-o', 'fa-square', 'fa-square-o']),
    icon: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    color: 'white',
    bg: '#444',
    size: '1',
    label: null,
    className: '',
    onClick() { },
  }

  render() {
    return (
      <div>
        <span className={'fa-stack fa-lg'} onClick={this.props.onClick}>
          <i className={`fa ${this.props.stackIcon} fa-stack-2x`} style={{ color: this.props.bg }} />
          <i className={`fa fa-stack-1x ${this.props.icon}`} style={{ color: this.props.color }} />
        </span>
        {this.props.label}
      </div>
    );
  }
}
