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

import HeroSection from '../components/contact/HeroSection';
// import Hero from '../components/Hero';
import AddressSection from '../components/contact/AddressSection';
import MapSection from '../components/contact/MapSection';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

class ContactPage extends Component {

  render() {
    const posts = this.props.data.posts.edges;
    // const towns = this.props.data.towns.edges
    const products = this.props.data.products.edges;

    return (
      <Wrapper>
        <HeroSection />
        {/* <IntroductionSection /> */}
        <AddressSection />
        <MapSection />
        {/* <ServicesSection services={products} /> */}
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

// export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);

export default ContactPage;

export const pageQuery = graphql`
  query getContact {
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
