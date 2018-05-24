import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import { rhythm } from '../utils/typography';
import toCommaSeparatedList from '../utils/toCommaSeparatedList';
import media from '../css/media';
import EditThisPage from '../components/EditThisPage';
import Sidebar from '../components/Sidebar';
import authors from '../../content/authors.yaml';
import Disqus from "../components/Disqus/Disqus";
import HeroSection from '../components/HeroSection';
import IntroBlock from '../components/home/IntroBlock';
import NavJump from '../components/home/NavJump';
import ContentBlock from '../components/post/ContentBlock';
import backgroundImage from '../assets/iStock-478834094-cropped.jpg'
import SectionTitle from '../components/SectionTitle';

const globalStyle = `
  h1 {
    margin-top: 1em;
    margin-bottom: 0;
    color: #2d2d2d;
    font-size: 60px;
    font-weight: bold;

    @media (${media.tablet}) {
      font-size: ${60 * 0.8}px;
    }
  }

  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    color: #3c3c3c;
    font-size: 37px;
    font-weight: bold;

    @media (${media.tablet}) {
      font-size: ${37 * 0.8}px;
    }
  }

  h2:first-child {
    margin-top: 0;
  }

  h3 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    color: #3c3c3c;
    font-size: 30px;
    font-weight: bold;

    @media (${media.tablet}) {
      font-size: ${30 * 0.8}px;
    }
  }

  h4 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    color: #505050;
    font-size: 26px;
    font-weight: bold;

    @media (${media.tablet}) {
      font-size: ${26 * 0.8}px;
    }
  }

  p {
    color: #000;
    font-size: 20px;
    line-height: 1.7;
  }

  a {
    color: #2b9ac8;
    text-decoration: underline;
  }

  table {
    display: block;
    overflow: auto;

    td,
    th {
      padding: 0.6em;
      border: 1px solid hsla(0, 0%, 0%, 0.12);
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(0deg, #fafafa, #fafafa);
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: 25% 100%;
  opacity: 1;
  transition: opacity 0.5s;
  width: 100%;

  @media (${media.desktop}) {
    background-size: 25% 100%;
  }

  @media (${media.tablet}) {
    background: #fff;
  }
`;

const Container = styled.div`
  display: flex;
  width: calc(1024px + ${rhythm(0.5)});
  margin: 0 ${rhythm(0.5)};
  justify-content: space-between;

  @media (${media.giant}) {
    width: calc(100% - ${rhythm(1)});
    justify-content: center;
  }
`;

const Left = styled.main`
  display: flex;
  width: 75%;
  padding: 32px 40px 100px 0;
  flex-direction: column;

  @media (${media.desktop}) {
    width: 75%;
  }

  @media (${media.tablet}) {
    width: calc(100% - ${rhythm(0.5)});
    padding: 16px 0 32px;
  }

  ${globalStyle};
`;

const Right = styled.aside`
  display: flex;
  width: 25%;

  /* add half of H1 font-size for alignment */
  padding-top: calc(32px + 30px);
  padding-left: 40px;
  background-color: #fafafa;

  @media (${media.desktop}) {
    width: 25%;
    padding-left: 25px;
  }

  @media (${media.tablet}) {
    display: none;
  }
`;

const Title = styled.h1`
  margin-bottom: 0;
`;

const TitleSection = styled.section`
  margin-bottom: 2.5em;
`;

const Meta = styled.div`
  margin-top: 0.5em;
  color: rgb(109, 109, 109);
`;

const renderAuthor = author => {
  const meta = get(authors, author);
  const url = get(meta, 'url');
  const name = get(meta, 'name');
  if (url) {
    return (
      <a href={url} target="_blank" key={name}>
        {name}
      </a>
    );
  }
  return <span>{name}</span>;
};

export default ({ data, location }) => {
  const post = data.markdownRemark;
  const { title, eventDate, author, date, id, price, image, description, path } = post.frontmatter;
  const { pathname } = location;
  const disqusShortname = 'headforcode'

  return (
    <Main id="content">
      <Helmet title={`${title} | Farnborough Guide`} />
      <Wrapper>
       
        {/* <HeroSection title={title} slogan={description} /> */}
        <HeroSection title={"Farnborough Guide"} slogan="Events / News / Business / What to do?" backgroundImage={backgroundImage} />
        {/* <SectionTitle title={title} slogan={description}></SectionTitle> */}

        <ContentBlock 
          title={title} 
          description={description} 
          html={post.html} 
          eventDate={eventDate}
        />
        <IntroBlock />
      
      </Wrapper>
    </Main>
  );
};

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
            resize(width: 800) {
              src
            }
          }
        }
        date
        eventDate
        title
        description
        areas
      }
    }
  }
`;