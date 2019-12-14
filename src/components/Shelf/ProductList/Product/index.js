import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';
import { useHistory } from "react-router-dom";

class  Product extends Component {
  render() {
    // let history = useHistory();
    return (
      <div
        className="shelf-item"
        // onClick={() => history.push(`/product/details/${this.props.product.sku}`)}
        data-sku={this.props.product.sku}
      >
        {this.props.product.isFreeShipping && (
          <div className="shelf-stopper">Free shipping</div>
        )}
        <Thumb
          classes="shelf-item__thumb"
          src={require(`../../../../static/products/${this.props.product.primaryImage}`)}
          alt={this.props.product.title}
        />
        <p className="shelf-item__title">{this.props.product.title}</p>
        <div className="shelf-item__price">
          <div className="val">
            <span>{this.props.product.currencyFormat}</span>
            <span>{formatPrice(this.props.product.price, this.props.product.currencyId)}</span>
          </div>
        </div>
        <a href={`/product/details/${this.props.product.sku}`} className="shelf-item__buy-btn">View Details</a>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
