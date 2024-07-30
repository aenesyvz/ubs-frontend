import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledElement = styled.div`
    display:flex;
    flex-direction:column;
    cursor:pointer;
    font-size:14px;
    font-weight:500;
    padding:16px 8px;
`;


function TabbarHeaderItem({ title, onClick }) {
    return (
        <StyledElement onClick={onClick}>
            {title}
        </StyledElement>
    )
}
TabbarHeaderItem.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
    active: PropTypes.bool.isRequired
};

export default TabbarHeaderItem;