import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themes from '../../../../../helpers/themes'
import { Link } from 'react-router-dom';

const StyledElement = styled.div`
  padding: 10px 12px;
  border-radius: 8px;

  color: ${(props) =>
    props.active.toString().toLowerCase() === 'true'
      ? themes.teacher.sidebar_navigate_active_icolor
      : themes.teacher.sidebar_navigate_normal_icolor};
  background-color: ${(props) =>
    props.active.toString().toLowerCase() === 'true'
      ? themes.teacher.sidebar_navigate_active_bgcolor
      : themes.teacher.sidebar_navigate_normal_bgcolor};

  & > a {
    text-decoration: none;

    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;

    > .icon {
      height: 24px;
      width: 24px;
      color: ${(props) =>
    props.active.toString().toLowerCase() === 'true'
      ? themes.teacher.sidebar_navigate_active_icolor
      : themes.teacher.sidebar_navigate_normal_icolor};
    }

    > .text {
      font-weight: bold;
      font-size: 14px;
      line-height: 120%;
      color: ${(props) =>
    props.active.toString().toLowerCase() === 'true'
      ? themes.teacher.sidebar_navigate_active_icolor
      : themes.teacher.sidebar_navigate_normal_icolor};
    }
  }
`;

function NavigationItem({ icon, text, href, onClick }) {
  const url = new URL(window.location.href);

  const active = url.pathname === href;

  return (
    <StyledElement href={href} active={active.toString()} onClick={onClick}>
      <Link to={href}>
        <span className="icon">{icon}</span>
        <span className="text">{text}</span>
      </Link>
    </StyledElement>
  );
}

NavigationItem.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavigationItem;
