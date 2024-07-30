import React from 'react';
import styled from 'styled-components';
import themes from '../../../../helpers/themes';
import { useSelector } from 'react-redux';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SidebarLogo from '../../../../components/sidebar/components/sidebarLogo/sidebarLogo';
import Navigations from './navigations/navigations';
import AccountSwitcher from './account_switcher';
import { handleOpenSidebar } from '../../../../actions/actions';


const StyledElement = styled.aside`
  color: #fff;
  background-color: ${themes.common.black_color};
  position:fixed;
  left:0;
  top:0;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 25px;
  width:262px;
  height:calc(100%);
  transition: all .3s;
  z-index:100;

  @media screen and (max-width:776px){
    left:${(props) => props.isOpen ? 0 : '-100%'};
  }

  & > .close-icon{
    position:absolute;
    right:1rem;
    top:1rem;
    background:white;
    color:black;
    border-radius:50%;
    display:inline-flex;
    align-items: center;
    justify-content:center;

    @media screen and (min-width:776px){
      display:none;
    }
  }
`;

function SideBar() {
  const { isOpen } = useSelector((state) => state.sidebar);
  return (
    <StyledElement isOpen={isOpen}>
      <div className='close-icon'>
        <NavigateBeforeIcon onClick={() => handleOpenSidebar(false)} fill={themes.admin.primary} height={32} width={32} />
      </div>
      <SidebarLogo />
      <AccountSwitcher />
      <Navigations />
    </StyledElement>
  );
}

export default SideBar;
