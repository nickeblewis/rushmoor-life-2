import React from 'react'
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import media from '../../css/media';
import * as palette from '../../data/Style';
import format from 'date-fns/format';
import config from '../../data/SiteConfig';

import {
    Link
} from 'react-router'

import BulletinItem from '../../components/BulletinItem';
import Card from '../../components/Card';

const Wrapper = styled.section`
  display: flex;
  height: auto;
  padding: 50px 0;
  justify-content: center;
  background-color: #fff;

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${palette.GRID_COLUMNS}, 1fr);
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .gatsby-image-outer-wrapper, .gatsby-image-wrapper {
    position: static !important;
  }
`;

const Heading = styled.h1`
  margin: 0;
  color: #000;
  font-family: BebasNeue;
  font-size: 36px;
  text-align: center;
  letter-spacing: 8.2px;
  width: 100%;
  @media (${media.giant}) {
    font-size: ${81 * 0.8}px;
  }

  @media (${media.desktop}) {
    font-size: ${81 * 0.6}px;
  }

  @media (${media.tablet}) {
    font-size: 12vw;
  
  }
`;

const SubHeading = styled.h2`
  color: #000;
  font-family: SFUIDisplay;
  font-size: 26px;
  text-align: center;
  font-weight: 300;
  width: 100%;
  // letter-spacing: 3.5px;

  @media (${media.giant}) {
    font-size: ${22 * 0.8}px;
  }

  @media (${media.desktop}) {
    font-size: ${22 * 0.6}px;
  }

  @media (${media.tablet}) {
    font-size: 6vw;
    background: white;
  }
`;

const DateWrapper = styled.div`
color: #EC2148;
font-family: SFUIDisplay;
font-size: 18px;
text-align: center;
font-weight: 300;
width: 100%;
paddong: 20px;
// letter-spacing: 3.5px;

@media (${media.giant}) {
  font-size: ${22 * 0.8}px;
}

@media (${media.desktop}) {
  font-size: ${22 * 0.6}px;
}

@media (${media.tablet}) {
  font-size: 6vw;
  background: white;
}
`;

const DateLine = styled.h3`
  color: ##EC2148;
  font-family: SFUIDisplay;
  font-size: 18px;
  text-align: center;
  font-weight: 300;
  width: 100%;
  paddong: 20px;
  // letter-spacing: 3.5px;

  @media (${media.giant}) {
    font-size: ${22 * 0.8}px;
  }

  @media (${media.desktop}) {
    font-size: ${22 * 0.6}px;
  }

  @media (${media.tablet}) {
    font-size: 6vw;
    background: white;
  }
`;

const Content = styled.div`
  display: flex;
  height: auto;
  text-align: left;
  justify-content: left;
  background-color: #fff;
  color: #666;

  @media (${media.tablet}) {
    padding: 20px 0;
  }
`;

class ContentBlock extends React.Component {

    render() {
        const { title, description, eventDate, html } = this.props;
        console.log(this.props)
        return (
            <Wrapper>
                <Container>
              
                    <Heading>{title}</Heading>
                    <SubHeading>{description}</SubHeading>
                    <DateWrapper>
                      <Date date={eventDate} />
                    </DateWrapper>
                    <Content>
                      <div dangerouslySetInnerHTML={{ __html: html }} />
                    </Content>
                </Container>
            </Wrapper>

        )
    }
}

export default ContentBlock;

const Date = ({ date }) => {
  const formatted = format(date, config.dateFormat);

  return (
    <span>{formatted}</span>
  );
};
