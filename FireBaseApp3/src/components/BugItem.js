import React, { Component, PropTypes } from 'react';
import { H, Card, ImageButton } from 'mg-react-ui-toolkit';

class BugItem extends Component {
  render() {
    const { actions, item } = this.props;
    console.log('closed',this.props.item.closed);
    return (
      <Card>
        <H s={4} deco="bold">{item.title}</H>
        <H s={4} deco="italic">{item.description}</H>
        <div className="row">
         {!item.closed &&
            <ImageButton
              onClick={id => actions.onItemClick(item.id)}
              icon="fa-times-circle"
              type="danger"
              label="Chiudi Bug"
            />
          }
       </div>
      </Card>
    );
  }
}

BugItem.propTypes = {
  item: PropTypes.any,
  actions: PropTypes.function,
  closed: PropTypes.bool,
};

BugItem.defaultProps = {
  closed: false,
  actions: {},
};

export default BugItem;
