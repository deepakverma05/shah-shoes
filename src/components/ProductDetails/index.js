import React, {Component} from 'react';
import {fetchProductDetails} from '../../services/shelf/actions';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../Spinner";
import GlobalHeader from "../GlobalHeader";
import GlobalFooter from "../GlobalFooter";
import ReactImageMagnify from 'react-image-magnify';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    fetchProductDetails: PropTypes.func.isRequired,
    productDetails: PropTypes.object.isRequired,
  };

  state = {
    isLoading: false,
    showCustomOrderSection:false
  };
  componentDidMount() {
    this.handleFetchProductDetails(this.props.match.params.handle);
  }
  handleFetchProductDetails = (sku) => {
    this.setState({ isLoading: true });
    this.props.fetchProductDetails(sku, () => {
      this.setState({ isLoading: false });
    });
  };

  render(){
    const { productDetails } = this.props;
    const { isLoading } = this.state;
    return(
      <React.Fragment>
        <GlobalHeader isSmall={true}/>
        {isLoading && <Spinner />}
        {!isLoading &&
        <div className="product-details__container">
          <div className={`product-details__left-section`}>
            <div className={`product-details__secondary-images-wrapper`}>{
             productDetails.imageList && productDetails.imageList.map((image)=><div className={`product-details__secondary-image`}>{image}</div>)
            }
            </div>
            <div className={`product-details__primary-image`}>{productDetails.sku &&
            <ReactImageMagnify {...{
              smallImage: {
                isFluidWidth: true,
                width: 200,
                height: 200,
                src: require(`../../static/products/${productDetails.primaryImage}`)
              },
              largeImage: {
                src: require(`../../static/products/${productDetails.primaryImage}`),
                width: 1200,
                height: 800,
              }
            }} />}
            </div>
          </div>
          <div className={`product-details__right-section`}>
            <div className={`product-details__right-section-header`}>
              <div className={`certificate`}>Tailor Made</div>
              <div className={`certificate`}>Personal Assistance</div>
              <div className={`certificate`}>Assured Quality</div>
            </div>
              <div className={`product-details__title`}><span>{productDetails.title}</span></div>
              <div className={`product-details__price`}>{productDetails.currencyFormat}
                <span>{productDetails.price}</span></div>
              {productDetails.isFreeShipping ?
                <div className={`product-details__price`}>Free Shipping</div> :
                <div className={`product-details__price`}>Shipping Charge: {productDetails.shippingCharge}</div>}
              <div className={`product-details__dance-categories`}><span>{productDetails.danceCategories && productDetails.danceCategories.map((item)=><li>{item}</li>)}</span></div>
              <div className={`product-details__desc`}><span>{productDetails.description}</span></div>
              <div className={`product-details__order-btn`}>
                <button onClick={() => {
                  this.setState({showCustomOrderSection: true})
                }}>Custom Order
                </button>
              </div>
          </div>
        </div>
      }
        <div className={`custom-order__section-wrapper ${this.state.showCustomOrderSection? `show-section`:`hide-section`}`}>
          <button className={`close-button`} onClick={()=>{this.setState({showCustomOrderSection:false})}}>Close</button>
          This is custom order section.
        </div>
        <GlobalFooter/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  productDetails: state.shelf.productDetails,
});

export default connect(
  mapStateToProps,
  { fetchProductDetails }
)(ProductDetails);



