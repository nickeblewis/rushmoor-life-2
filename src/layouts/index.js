import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import baseStyles from '../css';
import theme from "../styles/theme";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomBarContainer from "../components/BottomBar/BottomBarContainer";

import { link, meta, script } from './head';

const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 80px;
`;

const Container = styled.main`
  display: flex;
  opacity: 1;
  transition: opacity 0.5s;
`;

export default ({ children, data, location }) => {
  baseStyles();
  const title = `${data.site.siteMetadata.title} | HeadForCode | We Teach. We Consult. We Solve.`;
  const { pathname } = location;

  return (
    <ThemeProvider theme={theme}>
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
        script={script}
      >
        <html lang="en" dir="ltr" />
      </Helmet>
      <Header title={data.site.siteMetadata.title} pathname={pathname} />
      <Container id="content" role="main">
        {children()}
      </Container>
      <Footer />
      {/* <BottomBarContainer /> */}
      <link id="snipcart-theme" type="text/css" href="https://cdn.snipcart.com/themes/base/snipcart.css" rel="stylesheet" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
      <script type="text/javascript" id="snipcart" data-api-key="{SNIPCART API KEY}"></script>

    </Wrapper>
    </ThemeProvider>

  );
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
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
