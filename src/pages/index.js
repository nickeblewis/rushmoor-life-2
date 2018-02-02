import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import HeroSection from '../components/HeroSection';
import IntroBlock from '../components/home/IntroBlock';
import NavJump from '../components/home/NavJump';

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
        <HeroSection title="Rushmoor.Life" slogan="Farnborough / North Camp / Aldershot" />
        <IntroBlock />
        <NavJump postEdges={postEdges} />
      </Wrapper>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
