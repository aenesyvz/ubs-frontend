import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themes from '../../../helpers/themes';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import { renderToString } from 'react-dom/server';

const StyledElement = styled.input`
  appearance: none;
  outline: none;

  font-size: 16px;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  width: 388px;

  padding: 10px 24px;

  background: ${themes.common.input_background_color};
  background-image: url('data:image/svg+xml;utf8,${(props) => props.icon}');
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: right 16px center;

  border: 0.25px solid ${(props) => props.primarycolor};
  border-radius: 12px;

  @media screen and (max-width: 867px) {
    width: 100%; /* Genişlik otomatik ayarlanacak */
    max-width: 288px; /* Maksimum genişlik belirle */
    padding: 10px 16px; /* Küçültülen padding */
  }

  @media screen and (max-width: 567px) {
    display: none;
  }
`;

function SearchField({ placeholder, primaryColor }) {
    return (
        <StyledElement
            icon={encodeURIComponent(
                renderToString(<SearchIcon fill={primaryColor} />)
            )}
            primarycolor={primaryColor}
            placeholder={placeholder}
        />
    );
}

SearchField.propTypes = {
    placeholder: PropTypes.string,
};

export default SearchField;
