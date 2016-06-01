import React, { Component, PropTypes } from 'react';
import './card.less';
import { cn } from '../../../utils/dom.js';

export default class Card extends Component {
  renderTitle() {
    const { title } = this.props;
    return (title) ? <div className="title">{title}</div> : null;
  }
  renderDescription() {
    const { description } = this.props;
    return (description) ? <div className="description">{description}</div> : null;
  }
  render() {
    const props = { ...this.props };
    props.className = cn('card', props.className);
    return (
        <div {...props}>
          {this.renderTitle()}
          {this.renderDescription()}
          {this.props.children}
      </div>
    );
  }
}


// PropTypes validation
Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any,
};

// default props
Card.defaultProps = {
};
