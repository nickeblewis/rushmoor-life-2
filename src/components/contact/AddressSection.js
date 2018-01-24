import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import media from '../../css/media';

import AddressItem from './AddressItem';

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

const Row = styled.div`
  display: flex;
  width: 100%;
  margin: ${rhythm(0.5)} 0;

  @media (${media.tablet}) {
    margin: 0;
    flex-wrap: wrap;
  }
`;

class AddressSection extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <AddressItem
              bold={false}
              title="Address"
              company="HeadForCode (Nick Lewis Ltd)"
              house="Ferneberga House"
              street="Alexandra Road"
              town="Farnborough"
              county="Hampshire"
              postcode="GU14 7QB"
              phone="01252 757213"
              email="nick@headforcode.com"
            />
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default AddressSection;
