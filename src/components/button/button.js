import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themes from '../../helpers/themes';

const StyledElement = styled.button`
  cursor: pointer;
  outline:none;
  border:none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

function Button({
    icon,
    text,
    color,
    backgroundColor,
    fontSize,
    fontWeight,
    borderRadius,
    padding,
    onClick,
    type = "submit"
}) {
    return (
        <StyledElement
            style={{
                color,
                backgroundColor,
                fontSize,
                fontWeight,
                borderRadius,
                padding,
            }}
            onClick={onClick}
            type={type}
        >
            {icon}
            <span>{text}</span>
        </StyledElement>
    );
}

Button.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.number,
    borderRadius: PropTypes.string,
    padding: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    color: '#fff',
    backgroundColor: themes.common.login_background_color,
    fontSize: '12px',
    fontWeight: 600,
    borderRadius: '8px',
    padding: '8px 16px',
    onClick: () => { },
};

export default Button;
