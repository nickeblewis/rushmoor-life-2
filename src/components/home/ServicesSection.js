import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import media from '../../css/media';

import IntroductionItem from './IntroductionItem';

const Wrapper = styled.section`
  display: flex;
  height: auto;
  padding: 50px 0;
  justify-content: center;

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

const Row = styled.div`
  display: flex;
  width: 100%;
  margin: ${rhythm(0.5)} 0;

  @media (${media.tablet}) {
    margin: 0;
    flex-wrap: wrap;
  }
`;

class ServicesSection extends Component {
  render() {
      console.log(this.props)
      const {services}  =this.props 
    // const locations = this.props.data.products.edges
    return (
      <Wrapper>
        
        <Container>          
        {services.map(({ node }, i) => (            
            <IntroductionItem key={i}
                picture={node.productImage.handle}
                title={node.productTitle}
                subTitle={node.productDescription}
            />
          ))}
        </Container>
      </Wrapper>
    );
  }
}

export default ServicesSection;
