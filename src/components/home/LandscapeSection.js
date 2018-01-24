import React, { Component } from 'react';
import styled from 'styled-components';

// import logo from '../../assets/logo.svg';
import landscape from '../../assets/business-header2-big.jpg';
import landscapeMobile from '../../assets/iStock-540738430.jpg';
import media from '../../css/media';

import GetStartedLink from './GetStartedLink';

const Wrapper = styled.section`
  display: flex;
  height: 36vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${landscape});
  background-color: #000;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (${media.tablet}) {
    height: 138vw;
    background-image: url(${landscapeMobile});
    
  }
`;

const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-family: BebasNeue;
  font-size: 81px;
  text-align: center;
  letter-spacing: 8.2px;

  @media (${media.giant}) {
    font-size: ${81 * 0.8}px;
  }

  @media (${media.desktop}) {
    font-size: ${81 * 0.6}px;
  }

  @media (${media.tablet}) {
    font-size: 12vw;
    background: black;
  }
`;

const Slogan = styled.h2`
  margin: 0 1vw 4vw;
  color: #fff;
  font-family: SFUIDisplay;
  font-size: 22px;
  text-align: center;
  font-weight: 300;
  letter-spacing: 3.5px;

  @media (${media.giant}) {
    font-size: ${22 * 0.8}px;
  }

  @media (${media.desktop}) {
    font-size: ${22 * 0.6}px;
  }

  @media (${media.tablet}) {
    font-size: 3vw;
    background: black;
  }
`;

class LandscapeSection extends Component {
  render() {
    return (
      <Wrapper>
        {/* <img src={logo} alt="logo" /> */}
        <Title>HeadForCode</Title>
        <Slogan>
          We Teach. We Consult. We Solve.
        </Slogan>
        { /* }<GetStartedLink to="/docs/GettingStarted">Get Started!</GetStartedLink> */ }
      </Wrapper>
    );
  }
}

export default LandscapeSection;
