import React, { Component } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import 'prismjs/themes/prism.css'; // eslint-disable-line

import baseStyles from '../css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import StripeProductList from '../components/StripeProductList';

import { link, meta, script } from './head';

const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 80px;
`;

function addTargetBlank() {
  // https://stackoverflow.com/questions/4425198/can-i-create-links-with-target-blank-in-markdown
  const { links } = document;
  for (let i = 0; i < links.length; i++) {
    if (links[i].hostname !== window.location.hostname) {
      links[i].target = '_blank';
    }
  }
}

export default class DocLayout extends Component {
  componentDidMount() {
    addTargetBlank();
  }

  componentDidUpdate() {
    addTargetBlank();
  }

  render() {
    const { children, data, location } = this.props;
    baseStyles();
    const { pathname } = location;
    const title = `${data.site.siteMetadata.title} | Nick Lewis - freelance web developer`;
    const products = this.props.data.stripeProducts.edges;
    return (
      <Wrapper>
        <Helmet
          title={title}
          meta={[
            {
              name: 'description',
              content: title,
            },
            ...meta,
          ]}
          link={link}
        >
          <html lang="en" dir="ltr" />
        </Helmet>
        <Header title={data.site.siteMetadata.title} pathname={pathname} />
        {children()}
        <StripeProductList products={products} />
        <Footer />
      </Wrapper>
    );
  }
}

export const query = graphql`
  query DocLayoutWithProductsQuery {
    stripeProducts: allStripeProduct {
      edges {
        node {
          name
          id
          description
        }
      }
    }
    site: site {
      siteMetadata {
        title
      }
    }
  }
`;
