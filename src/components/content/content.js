import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themes from '../../helpers/themes';

const StyledElement = styled.main`
  padding: 24px;
  padding-left:320px;
  transition: all .3s;

  @media screen and (max-width:776px){
    padding-left:0;
  }
`;

function Content({ children }) {
    return (
        <StyledElement>
            {children}
        </StyledElement>
    );
}

Content.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
};

export default Content;
