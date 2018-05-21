import React from 'react'
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import media from '../../css/media';
import * as palette from '../../data/Style';

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
  background-color: #000;

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

const Content = styled.div`
display: flex;
height: auto;
padding: 50px 0;
justify-content: center;
background-color: #000;

@media (${media.tablet}) {
  padding: 20px 0;
}
`;

class ContentBlock extends React.Component {

    render() {
        const postEdges = this.props.postEdges;
        console.log('postEdges', postEdges)
        return (
            <Wrapper>
                <Container>
              
                    <Content>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </Content>
                </Container>
            </Wrapper>

        )
    }
}

export default ContentBlock
