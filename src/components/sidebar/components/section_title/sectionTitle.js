import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledElement = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding: 8px 8px 8px 0px;

  color: rgba(255, 255, 255, 0.7);
`;

function SectionTitle({ text }) {
    return <StyledElement>{text}</StyledElement>;
}

SectionTitle.propTypes = {
    text: PropTypes.string.isRequired,
};

export default SectionTitle;
