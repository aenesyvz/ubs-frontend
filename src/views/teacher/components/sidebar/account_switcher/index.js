import { NavigateNext } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import themes from '../../../../../helpers/themes';
import { Skeleton, alpha, hexToRgb } from '@mui/material';

const StyledElement = styled.div`
  display: flex;
  align-items: center;

  padding: 8px;
  gap: 8px;
  border: 1px solid ${themes.teacher.sidebar_navigate_active_icolor};
  border-radius: 8px;

  cursor: pointer;
  box-shadow: 0px 4px 4px 0px ${alpha(hexToRgb(themes.teacher.sidebar_navigate_active_icolor), 0.25)};

  & > img {
    height: 64px;
    width: 64px;
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

function AccountSwitcher() {
  return (
    <StyledElement>
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
      <div className="account_informations__navigate_next">
        <NavigateNext />
      </div>
    </StyledElement>
  );
}

export default AccountSwitcher