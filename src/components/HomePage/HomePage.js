import {
  ExpBlock,
  ExpContainer,
  ExpIcon,
  ExpIconBox,
  ExpInfoBox,
  ExpNumber,
  ExpText,
  HomeDesc,
  HomeFlex,
  HomeTitle,
  MainImage,
  PeopleIcon,
  PeopleIconBox,
  QuestionIcon,
  QuestionIconBox,
  SectionHome,
  StartButton,
} from './HomePage.styled';
const IMAGE_BASE_URL = process.env.PUBLIC_URL + '/images';

export const HomePage = () => {
  return (
    <SectionHome>
      <div className="container">
        <HomeFlex>
          <div>
            <HomeTitle>
              The road to the <span>depths</span> of the human soul
            </HomeTitle>
            <HomeDesc>
              We help you to reveal your potential, overcome challenges and find
              a guide in your own life with the help of our experienced
              psychologists.
            </HomeDesc>
            <StartButton to="/psychologists">
              Get started
              <img src={`${IMAGE_BASE_URL}/svg/buton-arrow.svg`} alt="arrow" />
            </StartButton>
          </div>
          <ExpContainer>
            <ExpBlock>
              <ExpIconBox>
                <ExpIcon
                  src={`${IMAGE_BASE_URL}/svg/check-mark-orange.svg`}
                  alt="check-mark"
                  width="30"
                  height="30"
                />
              </ExpIconBox>
              <ExpInfoBox>
                <ExpText>Experienced psychologists</ExpText>
                <ExpNumber>15,000</ExpNumber>
              </ExpInfoBox>
            </ExpBlock>
            <div>
              <PeopleIconBox>
                <PeopleIcon
                  src={`${IMAGE_BASE_URL}/svg/people.svg`}
                  alt="people icon"
                  width="20"
                  height="20"
                />
              </PeopleIconBox>
              <QuestionIconBox>
                <QuestionIcon
                  src={`${IMAGE_BASE_URL}/svg/question-sign.svg`}
                  alt="question sign icon"
                  width="10"
                  height="17"
                />
              </QuestionIconBox>
              <picture>
                <source
                  srcSet={`${IMAGE_BASE_URL}/homepage/woman-desktop-1x.jpg 1x,
                ${IMAGE_BASE_URL}/homepage/woman-desktop-2x.jpg 2x`}
                  media="(min-width: 320px)"
                />
                <MainImage
                  src={`${IMAGE_BASE_URL}/homepage/woman-desktop-1x.jpg`}
                  alt="women"
                  width="464"
                  height="526"
                />
              </picture>
            </div>
          </ExpContainer>
        </HomeFlex>
      </div>
    </SectionHome>
  );
};
