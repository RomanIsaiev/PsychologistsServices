import { NavLink } from 'react-router-dom';
const IMAGE_BASE_URL = process.env.PUBLIC_URL + '/images';

export const HomePage = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div>
            <h1>
              The road to the <span>depths</span> of the human soul
            </h1>
            <p>
              We help you to reveal your potential, overcome challenges and find
              a guide in your own life with the help of our experienced
              psychologists.
            </p>
            <NavLink>
              Get started
              <img src={`${IMAGE_BASE_URL}/svg/buton-arrow.svg`} alt="arrow" />
            </NavLink>
          </div>
          <div>
            <div>
              <div>
                <img
                  src={`${IMAGE_BASE_URL}/svg/check-mark-orange.svg`}
                  alt="check-mark"
                />
              </div>
              <div>
                <p>Experienced psychologists</p>
                <span>15,000</span>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={`${IMAGE_BASE_URL}/svg/people.svg`}
                  alt="people icon"
                />
              </div>
              <div>
                <img
                  src={`${IMAGE_BASE_URL}/svg/question-sign.svg`}
                  alt="question sign icon"
                />
              </div>
              <picture>
                <source
                  srcSet={`${IMAGE_BASE_URL}/homepage/woman-desktop-1x.jpg 1x,
                ${IMAGE_BASE_URL}/homepage/woman-desktop-2x.jpg 2x`}
                  media="(min-width: 320px)"
                />
                <img
                  src={`${IMAGE_BASE_URL}/homepage/woman-desktop-1x.jpg`}
                  alt="women"
                  width="464"
                  height="526"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
