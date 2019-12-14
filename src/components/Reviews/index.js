import React from 'react';
import Review from './Review';

const Reviews = ({ reviews })=> {
  return reviews.map(p => {
    return <Review review={p} key={p.id} />;
  })
};

export default Reviews;
