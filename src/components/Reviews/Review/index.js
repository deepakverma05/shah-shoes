import React, {Component} from 'react';
import PropTypes from 'prop-types';

class  Review extends Component {
  render() {
    const { review } = this.props;
    return (
      <div className={`review-item`}>
      {review.customerName}<br/>
      {review.reviewDetails}
      </div>
    );
  }
}

Review.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Review;
