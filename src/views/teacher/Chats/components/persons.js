import React from 'react'
import styled from 'styled-components'
import themes from '../../../../helpers/themes';
import SidebarLogo from '../../../../components/sidebar/components/sidebarLogo/sidebarLogo';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import AccountSwitcher from '../../components/sidebar/account_switcher';
import { alpha, hexToRgb } from '@mui/material';
import SectionTitle from '../../../../components/sidebar/components/section_title/sectionTitle';


const StyledElement = styled.aside`
   position:fixed;
   left:0;
   top:0;
   display: flex;
   flex-direction: column;
   padding: 24px;
   gap: 25px;
   width:262px;
   background-color:${themes.common.black_color};
   height:100vh;
   color:#fff;
    
   & > .close-icon{
    position:absolute;
    right:1rem;
    top:1.3rem;
    background:white;
    color:black;
    border-radius:50%;
    display:inline-flex;
    align-items: center;
    justify-content:center;
   }
`;

const MessagePersonStyledElement = styled.div`
  display: flex;
  align-items: center;
 background-color:${themes.common.black_color};
  padding: 8px;
  gap: 8px;
  border: 2px solid ${(props) => props.primaryColor};
  border-radius: 8px;

  cursor: pointer;
  box-shadow: 0px 4px 4px 0px ${(props) => alpha(hexToRgb(props.primaryColor), 0.25)};

  & > img {
    height: 48px;
    width: 48px;
    border-radius: 100%;
  }

  & > .account_informations {
    display: flex;
    justify-content:center;
    flex-direction: column;

    gap: 4px;

    > .account_informations_name {
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
    }

    .account_informations_status {
      font-size: 13px;
      line-height: 120%;
    }
  }

  & > .account_informations__navigate_next {
    display: flex;
    flex-grow: 1;
    justify-content: end;
  }
`;

const AllMessagePersonStyledElement = styled.div`
    display:grid;
    gap:6px;
    height: 60vh;
    overflow-y:scroll;
    background-color:#37474F;
    padding:6px;
    border-radius:6px;

     &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: Just to ensure there's no color */
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

function Persons() {
    return (
        <StyledElement>
            <div className='close-icon'>
                <NavigateBeforeIcon fill={themes.teacher.primary} height={32} width={32} />
            </div>
            <SidebarLogo />
            <AccountSwitcher />
            <SectionTitle text='All Messages' />
            <AllMessagePersonStyledElement>
                <MessagePersonStyledElement primaryColor={themes.common.sidebar_navigate_active_icolor} className='message-person'>
                    <img
                        alt="berkay"
                        src={'/assets/images/omu_logo_white.png'}
                    />
                    <div className="account_informations">

                        <p className="account_informations_name">
                            Alper Enes Yavuz
                        </p>

                        <p className="account_informations_status">Çevrimiçi</p>
                    </div>
                </MessagePersonStyledElement>
                <MessagePersonStyledElement primaryColor={themes.teacher.sidebar_navigate_active_icolor} className='message-person'>
                    <img
                        alt="berkay"
                        src={'/assets/images/omu_logo_white.png'}
                    />
                    <div className="account_informations">

                        <p className="account_informations_name">
                            Alper Enes Yavuz
                        </p>

                        <p className="account_informations_status">Çevrimiçi</p>
                    </div>
                </MessagePersonStyledElement>
                <MessagePersonStyledElement primaryColor={themes.common.sidebar_navigate_active_icolor} className='message-person'>
                    <img
                        alt="berkay"
                        src={'/assets/images/omu_logo_white.png'}
                    />
                    <div className="account_informations">

                        <p className="account_informations_name">
                            Alper Enes Yavuz
                        </p>

                        <p className="account_informations_status">Çevrimiçi</p>
                    </div>
                </MessagePersonStyledElement>
                <MessagePersonStyledElement primaryColor={themes.teacher.sidebar_navigate_active_icolor} className='message-person'>
                    <img
                        alt="berkay"
                        src={'/assets/images/omu_logo_white.png'}
                    />
                    <div className="account_informations">

                        <p className="account_informations_name">
                            Alper Enes Yavuz
                        </p>

                        <p className="account_informations_status">Çevrimiçi</p>
                    </div>
                </MessagePersonStyledElement>
                <MessagePersonStyledElement primaryColor={themes.common.sidebar_navigate_active_icolor} className='message-person'>
                    <img
                        alt="berkay"
                        src={'/assets/images/omu_logo_white.png'}
                    />
                    <div className="account_informations">

                        <p className="account_informations_name">
                            Alper Enes Yavuz
                        </p>

                        <p className="account_informations_status">Çevrimiçi</p>
                    </div>
                </MessagePersonStyledElement>
                <MessagePersonStyledElement primaryColor={themes.teacher.sidebar_navigate_active_icolor} className='message-person'>
                    <img
                        alt="berkay"
                        src={'/assets/images/omu_logo_white.png'}
                    />
                    <div className="account_informations">

                        <p className="account_informations_name">
                            Alper Enes Yavuz
                        </p>

                        <p className="account_informations_status">Çevrimiçi</p>
                    </div>
                </MessagePersonStyledElement>
                <MessagePersonStyledElement primaryColor={themes.common.sidebar_navigate_active_icolor} className='message-person'>
                    <img
                        alt="berkay"
                        src={'/assets/images/omu_logo_white.png'}
                    />
                    <div className="account_informations">

                        <p className="account_informations_name">
                            Alper Enes Yavuz
                        </p>

                        <p className="account_informations_status">Çevrimiçi</p>
                    </div>
                </MessagePersonStyledElement>
                <MessagePersonStyledElement primaryColor={themes.teacher.sidebar_navigate_active_icolor} className='message-person'>
                    <img
                        alt="berkay"
                        src={'/assets/images/omu_logo_white.png'}
                    />
                    <div className="account_informations">

                        <p className="account_informations_name">
                            Alper Enes Yavuz
                        </p>

                        <p className="account_informations_status">Çevrimiçi</p>
                    </div>
                </MessagePersonStyledElement>

            </AllMessagePersonStyledElement>


        </StyledElement>
    )
}

export default Persons