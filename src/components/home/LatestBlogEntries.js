import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import media from '../../css/media';

import BlogItem from './BlogItem';

import {
  Link
} from 'react-router'

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

const Title = styled.h2`
  color: #df3c3c;
  border-bottom: #df3c3c 5px solid;
  font-size: 37px;
  font-weight: bold;
  letter-spacing: -1px;

  @media (${media.tablet}) {
    margin-bottom: 0.5em;
    font-size: 28px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.theme.grids.LatestBlogEntries}, 1fr);
  grid-gap: 50px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .gatsby-image-outer-wrapper, .gatsby-image-wrapper {
    position: static !important;
  }
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

class LatestBlogEntries extends Component {
  render() {
      console.log(this.props)
      const {posts}  =this.props 
      console.log(posts)
    // const locations = this.props.data.products.edges
    return (
      <Wrapper>
        
        <Container>          
          <Grid>
        {posts.map(({ node }, i) => (      
            
            <BlogItem key={i}
                picture={node.postImage.cover}
                title={node.postTitle}
                subTitle={node.postContent}
            />
          
          ))}
          </Grid>
        </Container>
        
      </Wrapper>
    );
  }
}

export default LatestBlogEntries;
