import'./datatableitem.less';
import React, { Component, PropTypes } from 'react';
import Grid from '../../layout/grid/Grid';

export default class DataTableItem extends Component {
  render() {
    return (
      <Grid align="center">
        <div className="datatable-label">{this.props.label}</div>
        <div className="datatable-value">{this.props.value}</div>
      </Grid>
    );
  }
}

DataTableItem.propTypes = {
  label: React.PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
