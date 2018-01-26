import React, { Component } from 'react';
import styled from 'styled-components';

// import DocsList from '../../content/docs/nav.yaml';
// import BlogList from '../../content/blog/nav.yaml';
import BlogList from '../../content/posts/nav.yaml';

import ListSection from './ListSection';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

class Sidebar extends Component {
  render() {
    const { pathname } = this.props;
    console.log(pathname)
    // const List = pathname.includes('/blog') ? BlogList : DocsList;
    const List = pathname.includes('/posts') ? BlogList : DocsList;
    console.log(List)
    return (
      <Wrapper>
        {List.map(list => {
          const selectedTitle = pathname
            .replace(
              /(\/bottender-docs)?\/(docs|blog|posts)\/.*?((Guides|APIReference|Platforms)-)?/i,
              ''
            )
            .replace(/\/?[0-9]*/g, '')
            .replace('-', '');

            console.log(selectedTitle)
          const selectedItem = list.items.find(
            item =>
              selectedTitle.toLowerCase() ===
              item.title.replace(/ /g, '').toLowerCase()
          );
console.log(selectedItem)
          return (
            <ListSection
              key={list.title}
              list={list}
              selectedItem={selectedItem}
              {...this.props}
            />
          );
        })}
      </Wrapper>
    );
  }
}

export default Sidebar;
