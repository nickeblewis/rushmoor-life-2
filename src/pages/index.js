import React, { Component } from 'react';
// import { connect } from "react-redux";
// import {
//   updatePostsData,
//   setNavigatorIsAside,
//   setNavigatorInTransition
// } from "../state/store";

// import StarRatingComponent from 'react-star-rating-component'
import Link from 'gatsby-link';
import styled from 'styled-components';

import LandscapeSection from '../components/home/LandscapeSection';
// import Hero from '../components/Hero';
import IntroductionSection from '../components/home/IntroductionSection';
// import ServicesSection from '../components/home/ServicesSection';
import LatestBlogEntries from '../components/home/LatestBlogEntries';
import CTASection from '../components/home/CTASection';
import HeroSection from '../components/HeroSection';
import IntroBlock from '../components/home/IntroBlock';
import NavJump from '../components/home/NavJump';
import Card from '../components/Card';
import * as palette from '../data/Style';
import media from '../css/media';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
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

class IndexPage extends Component {
  // componentWillMount() {
  //   let isWideScreen =
  //     typeof window !== "undefined"
  //       ? document.documentElement.clientWidth > 776
  //       : false;

  //   const posts = this.props.data.allMarkdownRemark.edges;
  //   this.props.updatePostsData(posts);
  //   this.props.setNavigatorIsAside(false);
  //   if (typeof window !== `undefined`) {
  //     this.props.setNavigatorInTransition(true);

  //     setTimeout(() => {
  //       this.props.setNavigatorInTransition(false);
  //     }, isWideScreen ? 500 : 0);
  //   }
  // }

  render() {
    // const posts = this.props.data.posts.edges;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    // const towns = this.props.data.towns.edges
    // const products = this.props.data.products.edges;

    return (
      <Wrapper>
        <HeroSection title="Rushmoor.Life" slogan="Farnborough / North Camp / Aldershot" />
        <IntroBlock />
        <NavJump postEdges={postEdges} />

        {/* <LandscapeSection /> */}
        {/* <IntroductionSection /> */}
        {/* <ServicesSection services={products} /> */}
        {/* <LatestBlogEntries posts={posts} /> */}
        {/* <CTASection /> */}
        {/* <Content> */}
         
        {/* </Content> */}
      </Wrapper>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     navigatorIsAside: state.navigator.isAside,
//     navigatorIsActive: state.posts.length
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     updatePostsData: data => dispatch(updatePostsData(data)),
//     setNavigatorIsAside: val => dispatch(setNavigatorIsAside(val)),
//     setNavigatorInTransition: val => dispatch(setNavigatorInTransition(val))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);

export default IndexPage;

// export const pageQuery = graphql`
//   query getAllLocationsEvents {
//     posts: allBlogPosts {
//       edges {
//         node {
//           id
//           postTitle
//           postSlug
//           postContent
//           postDate
//           postImage {
//             id
//             handle
//             fileName {
//               childImageSharp {
//                 sizes(
//                   maxWidth: 850
//                   quality: 90
//                   traceSVG: { color: "#328bff" }
//                 ) {
//                   ...GatsbyImageSharpSizes_withWebp_tracedSVG
//                 }
//               }
//             }
//           }
//           authors {
//             authorName
//           }
//         }
//       }
//     }
//   }
// `;

// export const pageQuery = graphql`
//   query getAllLocationsEvents {
//     posts: allBlogPosts {
//       edges {
//         node {
//           id
//           postTitle
//           postSlug
//           postContent
//           postDate
//           postImage {
//             id
//             handle

//           }
//           authors {
//             authorName
//           }
//         }
//       }
//     }
//   }
// `;

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
                  maxWidth: 850
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
