import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {updateStyleFilters} from '../../../services/styleFilters/actions';
import Checkbox from '../../Checkbox';

import './style.scss';

class StyleFilters extends Component {
  static propTypes = {
    updateStyleFilters: PropTypes.func.isRequired,
    styleFilters: PropTypes.array
  };

  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }

    this.props.updateStyleFilters(Array.from(this.selectedCheckboxes));
  };

  createCheckbox = label => (
    <Checkbox
      classes="filters-checkbox"
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
      isChecked={label === this.props.selectedItem}
    />
  );

  createCheckboxes = () => this.props.filterArray.map(this.createCheckbox);

  render() {
    return (
      <div className="filters_wrapper">
        <h4 className="title">{this.props.filterText}</h4>
        {this.createCheckboxes()}
      </div>
    );
  }
}
StyleFilters.propTypes={
  filterText: PropTypes.string.isRequired,
  filterArray: PropTypes.array,
  selectedItem:PropTypes.string
};
const mapStateToProps = state => ({
  styleFilters: state.styleFilters.styleFilters
});

export default connect(
  mapStateToProps,
  { updateStyleFilters}
)(StyleFilters);
