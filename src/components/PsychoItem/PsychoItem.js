import React, { useState } from 'react';

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

  const handleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <li key={index}>
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
            <li>Initial_consultation: {initial_consultation}</li>
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
        </div>
        {expanded && (
          <div>
            {reviews.map((review, index) => (
              <div key={index}>
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
