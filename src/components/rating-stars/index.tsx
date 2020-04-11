import React from 'react';
import './style.scss';

interface Props {
  rating: number;
}

const RatingStars: React.FC<Props> = ({ rating }) => {
  return (
    <div className="rating-stars">
      <img
        src="/images/svg/rating-stars.svg"
        className="rating-stars__white"
        alt=""
      />
      <div
        className="rating-stars-filled"
        style={{ width: `${100 / 5 * rating}%` }}
      >
        <img
          src="/images/svg/rating-stars-filled.svg"
          alt=""
          className="rating-stars-filled__img"
        />
      </div>
    </div>
  );
};

export default RatingStars;
