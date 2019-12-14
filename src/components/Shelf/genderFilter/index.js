import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateGenderFilter } from '../../../services/genderFilter/actions';
import Checkbox from '../../Checkbox';
import './../styleFilter/style.scss';

class GenderFilter extends Component {
  static propTypes = {
    updateGenderFilter: PropTypes.func.isRequired,
    genderFilter: PropTypes.array
  };

  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }
componentWillReceiveProps(nextProps, nextContext) {
  this.selectedCheckboxes.add(this.props.selectedItem);
}

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    this.props.updateGenderFilter(Array.from(this.selectedCheckboxes));
  };

  createCheckbox = (label) => (
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
GenderFilter.propTypes={
  filterText: PropTypes.string.isRequired,
  filterArray: PropTypes.array,
  selectedItem:PropTypes.string
};
const mapStateToProps = state => ({
  genderFilter: state.genderFilter.genderFilter
});

export default connect(
  mapStateToProps,
  { updateGenderFilter}
)(GenderFilter);
