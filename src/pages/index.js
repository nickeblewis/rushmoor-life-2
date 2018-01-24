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
import ServicesSection from '../components/home/ServicesSection';
import CTASection from '../components/home/CTASection';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
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
    const posts = this.props.data.posts.edges;
    // const towns = this.props.data.towns.edges
    const products = this.props.data.products.edges;

    return (
      <Wrapper>
        <LandscapeSection />
        <IntroductionSection />
        <ServicesSection services={products} />
        {/* <CTASection /> */}
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

export const pageQuery = graphql`
  query getAllLocationsEvents {
    posts: allBlogPosts {
      edges {
        node {
          id
          postTitle
          postSlug
          postContent
          postDateAndTime
          postImage {
            id
          }
          authors {
            authorName
          }
        }
      }
    }
    products: allProducts {
      edges {
        node {
          id
          productTitle
          productDescription
          productImage {
            id
            handle
            width
            height
          }
        }
      }
    }
  }
`;
