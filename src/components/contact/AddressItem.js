import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import media from '../../css/media';

const Wrapper = styled.div`
  display: flex;
  padding-right: 2em;
  flex-direction: column;
  flex-basis: 50%;

  @media (${media.tablet}) {
    padding-right: 0;
    flex-basis: 100%;
  }
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

const SubTitle = styled.p`
  color: #767676;
  font-size: 20px;
  line-height: 1.6;
  
  ${props => props.bold === true
    ? 'font-weight: normal; font-size: 28px'
    : 'font-weight: normal;'};

  @media (${media.tablet}) {
    font-size: 16px;
  }
`;

const ReadMore = styled.p`
color: #ffffff;
font-size: 17px;
font-weight: bold;
letter-spacing: -1px;
text-align: right;
background-color: #df3c3c;
border-radius: 30px;
padding: 8px;
padding-right:20px;

@media (${media.tablet}) {
  margin-bottom: 0.5em;
  font-size: 28px;
}
`;
class AddressItem extends Component {
  render() {
    const { title, company, house, street, town, county, postcode, phone, email } = this.props;
    return (
      <Wrapper>
        <Title>{title}</Title>
        <div>{company}</div>
        <div>{house}</div>
        <div>{street}</div>
        <div>{town}</div>
        <div>{county}</div>
        <div>{postcode}</div>
        <div>Tel: {phone}</div>
        <div>Email: <a href={`mailto:${email}`}>{email}</a></div>

      </Wrapper>
    );
  }
}

export default AddressItem;
