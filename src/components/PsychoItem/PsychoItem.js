import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../redux/psychologists/favoriteReducer';

export const PsychoItem = ({ psychologist, index }) => {
  const {
    about,
    avatar_url,
    experience,
    initial_consultation,
    license,
    name,
    price_per_hour,
    rating,
    reviews,
    specialization,
  } = psychologist;

  const IMAGE_BASE_URL = process.env.PUBLIC_URL + '/images';
  const [expanded, setExpanded] = useState(false);
  const favorites = useSelector(state => state.favorites.items);
  const [isFavorite, setIsFavorite] = useState(
    favorites.some(item => item.name === name)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavorite(favorites.some(item => item.name === name));
  }, [favorites, name]);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(psychologist));
      setIsFavorite(false);
    } else {
      dispatch(addFavorite(psychologist));
      setIsFavorite(true);
    }
  };

  return (
    <li>
      <div>
        <div>
          <div>
            <img
              src={avatar_url}
              width="96"
              height="96"
              alt="psychologistphoto"
            />
          </div>
        </div>
        <div>
          <span>Psychologist</span>
          <h3>{name}</h3>
          <ul>
            <li>Experience: {experience}</li>
            <li>License: {license}</li>
            <li>Specialization: {specialization}</li>
            <li>Initial consultation: {initial_consultation}</li>
          </ul>
          <p>{about}</p>
        </div>
        <div>
          <div>
            <img
              src={`${IMAGE_BASE_URL}/svg/star.svg`}
              alt="star"
              width="16"
              height="16"
            />
            <p>Rating: {rating}</p>
          </div>
          <span>|</span>
          <div>
            <p>Price / 1 hour: {price_per_hour}$</p>
          </div>
          <div>
            <button type="button" onClick={handleFavoriteClick}>
              {isFavorite ? (
                <img
                  src={`${IMAGE_BASE_URL}/svg/heart-fill.svg`}
                  alt="star"
                  width="16"
                  height="16"
                />
              ) : (
                <img
                  src={`${IMAGE_BASE_URL}/svg/heart-empty.svg`}
                  alt="star"
                  width="16"
                  height="16"
                />
              )}
            </button>
          </div>
        </div>
        {expanded && (
          <div>
            {reviews.map((review, reviewIndex) => (
              <div key={reviewIndex}>
                <div>
                  <div>
                    <div>{review.reviewer.slice(0, 1)}</div>
                    <div>
                      <p>{review.reviewer}</p>
                      <div>
                        <img
                          src={`${IMAGE_BASE_URL}/svg/star.svg`}
                          alt="star"
                          width="16"
                          height="16"
                        />
                        <span>{review.rating}</span>
                      </div>
                    </div>
                  </div>
                  <p>{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <button onClick={handleReadMore}>
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </li>
  );
};
