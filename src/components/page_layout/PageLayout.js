import React from 'react'
import themes from '../../helpers/themes';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SideBar from '../sidebar/sidebar';
import Content from '../content/content';

const StyledElement = styled.div`
  main {
    margin-top:3rem;
  }

  @media screen and (min-width:776px){
    & > header {
      display:none;
    }

    & > main{
      margin-top:0;
    }
  }
`;

function PageLayout({ children }) {
  return (
    <StyledElement>
      <SideBar />
      <Content>{children}</Content>
    </StyledElement>
  );
}

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default PageLayout;
