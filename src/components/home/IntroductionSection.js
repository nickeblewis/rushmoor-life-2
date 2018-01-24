import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import media from '../../css/media';

import IntroductionItem from './IntroductionItem';

const Wrapper = styled.section`
  display: flex;
  height: auto;
  padding: 50px 0;
  justify-content: center;

  @media (${media.tablet}) {
    padding: 20px 0;
  }
`;

const Container = styled.div`
  display: flex;
  width: calc(1024px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  margin: ${rhythm(0.5)} 0;

  @media (${media.tablet}) {
    margin: 0;
    flex-wrap: wrap;
  }
`;

class TitleSection extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <IntroductionItem
              bold={false}
              title="Teaching"
              subTitle="We are learning all of the time and we love to share our experiences with clients and the development community. We can provide bespoke training to help developers at your business up-skill."
            />
            <IntroductionItem
              bold={false}
              title="Consultancy"
              subTitle="Have you ever considered augmenting your business with a developer who can provide frequent solutions for it? We work remotely and you can reach us during normal working hours via popular telecomms technology (Skype, Hangouts etc)."
            />
            <IntroductionItem
              bold={false}
              title="Solutions"
              subTitle="We have a wealth of experience working with all kinds of business across a wealth of marketplaces. So are just as happy to take over on existing projects as we are starting from scratch."
            />
            <IntroductionItem
              bold={false}
              title="What next?"
              subTitle="We are currently spending time on building this website further so that we can provide a wide range of training resources online, so that you can learn new skills at your own pace."
            />
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default TitleSection;
