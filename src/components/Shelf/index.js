import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../../services/shelf/actions';
import Spinner from '../Spinner';
import ShelfHeader from './ShelfHeader';
import ProductList from './ProductList';
import './style.scss';

class Shelf extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    genderFilter: PropTypes.array,
    styleFilters: PropTypes.array,
    sort: PropTypes.string
  };

  state = {
    isLoading: false
  };

  componentDidMount() {
    this.handleFetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const { genderFilter:nextGenderFilter, styleFilters: nextFilters, sort: nextSort } = nextProps;
    if(nextGenderFilter !== this.props.genderFilter){
      this.handleFetchProducts( nextGenderFilter, undefined, undefined);
    }
    if (nextFilters !== this.props.styleFilters) {
      this.handleFetchProducts(undefined, nextFilters, undefined);
    }
    if (nextSort !== this.props.sort) {
      this.handleFetchProducts(undefined,undefined, nextSort);
    }
  }

  handleFetchProducts = (
    genderFilter= this.props.genderFilter,
    styleFilters = this.props.styleFilters,
    sort = this.props.sort
  ) => {
    this.setState({ isLoading: true });
    this.props.fetchProducts(genderFilter, styleFilters, sort, () => {
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { products } = this.props;
    const { isLoading } = this.state;
    return (
      <React.Fragment>
        {isLoading && <Spinner />}
        <div className="shelf-container">
          <ShelfHeader productsLength={products.length} />
          <ProductList products={products} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.shelf.products,
  genderFilter:state.genderFilter.genderFilter,
  styleFilters: state.styleFilters.styleFilters,
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Shelf);
