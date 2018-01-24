import React, { Component } from 'react';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';
import media from '../css/media';

const Wrapper = styled.div`
display: flex;
height: 320px;
justify-content: center;
background: #a21010;
opacity: 1;
transition: opacity 0.5s;

// @media (${media.phone}) {
//   height: 500px;
// }
`;

const Product = styled.div`
  display: flex;
  padding-right: 2em;
  flex-direction: column;
  flex-basis: 50%;

  @media (${media.tablet}) {
    padding-right: 0;
    flex-basis: 100%;
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

const Container = styled.div`
  display: flex;
  width: calc(1024px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const TopTitle = styled.h2`
  color: #ff3f3c;
  font-size: 37px;
  font-weight: bold;
  letter-spacing: -1px;

  @media (${media.tablet}) {
   font-size: 24px;
  }
`;

const Title = styled.h2`
  color: #df3c3c;
  font-size: 37px;
  font-weight: bold;
  letter-spacing: -1px;

  @media (${media.tablet}) {
    font-size: 22px;
   }
`;

const SubTitle = styled.p`
  color: #f2f2f2;
  font-size: 20px;
  line-height: 1.6;

  @media (${media.tablet}) {
    font-size: 16px;
   }

`;

class StripeProductList extends Component {

  render() {
    const { products } = this.props;

    return (
      <Wrapper>
        <Container>
          <Row>
            <TopTitle>The following products have been retrieved from our Stripe account!</TopTitle>
          </Row>
          <Row>
            {products.map(({ node }, i) => (
              <Product key={i}>
                <Title>
                  {node.name}
                </Title>
                <SubTitle>
                  {node.description}
                </SubTitle>
              </Product>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default StripeProductList;
