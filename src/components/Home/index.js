import React, {Component} from 'react';
import {connect} from "react-redux";
import { updateGenderFilter } from '../../services/genderFilter/actions';
import { updateStyleFilters } from '../../services/styleFilters/actions';
import PropTypes from "prop-types";
import GlobalHeader from "../GlobalHeader";
import Hero from "../hero";
import  Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {reviews} from "../../components/reviews.js";
import GlobalFooter from "../GlobalFooter";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class Home extends Component {
  static propTypes = {
    updateGenderFilter: PropTypes.func.isRequired,
    updateStyleFilters:PropTypes.func.isRequired,
  };
  applyGenderFilter = (gender) => {
    this.props.history.push(`/product/${gender}`);
    this.props.updateGenderFilter([gender]);
  }
  applyStyleFilter = (style) => {
    this.props.history.push(`/product/${style}`);
    this.props.updateStyleFilters([style]);
  }

  render(){
    return(
      <React.Fragment>
        <GlobalHeader isSmall={false}/>
        <Hero/>
        <div className={`hero-one-liner`}>We make Tailor made best in class Dancing Shoes</div>
        <div className={`filter-by-gender`}>
          <div className={`filter-by-gender__category`} onClick={() => this.applyGenderFilter('Men')}><span>Women</span></div>
          <div className={`filter-by-gender__category`} onClick={() => this.applyGenderFilter('Women')}><span>Men</span></div>
        </div>
        <h4 className={`reviews-title`}>Customer Reviews</h4>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all 1"
          transitionDuration={1000}
          containerClass="reviews-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {
            reviews.reviews.map(p => {
            return <div className={`review-item`}>
              <p className={`customer-name`}>{p.customerName}</p>
              <p className={'customer-review'}>{p.reviewDetails}</p>
                  </div>;
            })
          }
        </Carousel>
        <h4 className={`dance-interest__label`}>Shop By Dance Interest</h4>
        <div className={`dance-interest__container`}>
          <div className={`dance-interest__item`} onClick={() => this.applyStyleFilter('Zumba')}><span>Zumba</span></div>
          <div className={`dance-interest__item`} onClick={() => this.applyStyleFilter('Latin')}><span>Latin</span></div>
          <div className={`dance-interest__item`} onClick={() => this.applyStyleFilter('BallRoom')}><span>BallRoom</span></div>
          <div className={`dance-interest__item`} onClick={() => this.applyStyleFilter('Salsa')}><span>Salsa</span></div>
        </div>
        <h4 className={`celeb-images-title`}>Our shoes are loved by everyone in the dancing industry, Bollywood and Hollywood</h4>
        <div className={`image-showcase`}>
          <div className={'celeb-image-tile'}>
            <span className={`celeb-name`}>Kangna Ranawat</span>
            <img src={''}/>
          </div>
          <div className={'celeb-image-tile'}>
            <span className={`celeb-name`}>Kangna Ranawat</span>
            <img src={''}/>
          </div>
          <div className={'celeb-image-tile'}>
            <span className={`celeb-name`}>Kangna Ranawat</span>
            <img src={''}/>
          </div>
          <div className={'celeb-image-tile'}>
            <span className={`celeb-name`}>Kangna Ranawat</span>
            <img src={''}/>
          </div>
          <div className={'celeb-image-tile'}>
            <span className={`celeb-name`}>Kangna Ranawat</span>
            <img src={''}/>
          </div>
          <div className={'celeb-image-tile'}>
            <span className={`celeb-name`}>Kangna Ranawat</span>
            <img src={''}/>
          </div>

        </div>
        <GlobalFooter/>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  Home: state.genderFilter.genderFilter,
  genderFilter:state.genderFilter.genderFilter,
  styleFilters: state.styleFilters.styleFilters,
});
export default connect(
  mapStateToProps,
  { updateGenderFilter,updateStyleFilters}
)(Home);
