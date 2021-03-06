import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import IntroBlock from '../components/home/IntroBlock';
import NavJump from '../components/home/NavJump';
import backgroundImage from '../assets/iStock-478834094-cropped.jpg'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

class IndexPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
  
    return (
      <Wrapper>
        <HeroSection title="Farnborough Guide" slogan="Events / News / Business / What to do?" backgroundImage={backgroundImage} />
        <SectionTitle title="Local Business & Organisations" slogan="We showcase our finest businesses and organisations 24-7!"></SectionTitle>
        <NavJump postEdges={postEdges} />
        <SectionTitle title="Latest Events" slogan="A bit of everything, from craft fayres to stage shows and festivals!"></SectionTitle>
        <NavJump postEdges={postEdges} />
        <SectionTitle title="Latest News" slogan="What is happening across the Borough"></SectionTitle>
        <NavJump postEdges={postEdges} />
        <IntroBlock />
      </Wrapper>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            cover {
              childImageSharp {
                sizes(
                  maxWidth: 1600
                  quality: 90
                  traceSVG: { color: "#328bff" }
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
            date
            title
            areas
          }
        }
      }
    }
  }
`;
