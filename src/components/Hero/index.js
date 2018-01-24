import React from 'react';
import styled, { css } from 'react-emotion';
import imageBig from '../../assets/images/business-header-big.jpg'
import imageSmall from '../../assets/images/business-header-small.jpg'
import colors from '../../utils/colors.js';

const HeroSection = styled.section`
  overflow: hidden;
  background-image: url(${props => props.imageSmall});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center left;
  opacity: 0.6;
  width: 100%;
  margin-top: 3.5rem;

  @media (min-width: 991px) {
    background-image: url(${props => props.imageBig});
    background-position: center center;
    background-repeat: no-repeat;
  }
`;

const insideDiv = css`
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
`;

const heroText = css`
  & h1 {
    font-size: 3.25rem;
    margin-bottom: 1rem;
    color: inherit;
  };
  & h3 {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
    color: inherit;
  }
  text-shadow: 1px 3px 8px ${colors.black};
  @media (min-width: 991px) {
    max-width: 600;
    & h1 {
      font-size: 5rem;
      margin-bottom: 2rem;
    }
  }
`;

const Hero = ({ imageBig, imageSmall, children }) => {
  return (
    <HeroSection
      imageBig={imageBig}
      imageSmall={imageSmall}
    >
      <div className={insideDiv}>
        <div className={heroText}>
          {children}
        </div>
      </div>
    </HeroSection>
  )
}

export default Hero;
