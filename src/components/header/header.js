import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import configs from '../../configs/configs';
import themes from '../../helpers/themes';
import { useDocumentTitle } from '../../utils/utils';
import Notifications from './notifications/notifications';
import SearchField from './search_field/search_field';


const StyledElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  padding: 10px;

  & > .header_start {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > .title {
      font-size: 24px;
      font-weight: bold;
    }
  }

  & > .header_tools {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }

  @media screen and (max-width: 776px) {
    flex-direction: column;
    gap: 10px;
 
    & > .header_tools {
      display:none;
      margin-left: auto;
    }
  }
`;


function Header({ title, subItem, primaryColor = themes.common.login_background_color }) {
  useDocumentTitle(`${title} - ${configs.projectName}`);

  return (
    <StyledElement>
      <div className="header_start">
        <div className="title">{title}</div>
        {subItem && <>{subItem}</>}
      </div>
      <div className="header_tools">
        <SearchField placeholder="What are you searching for..." primaryColor={primaryColor} />
        <Notifications primaryColor={primaryColor} />
      </div>
    </StyledElement>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subItem: PropTypes.element,
};

export default Header;