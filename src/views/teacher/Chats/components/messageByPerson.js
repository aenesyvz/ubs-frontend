import { alpha, hexToRgb } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import themes from '../../../../helpers/themes';
const StyledElement = styled.div`
    background-color:#37474F;
    padding-left:310px;
    // display:flex;
    height:100vh;
    width:100%;
`;

const SelectPersonStyledElement = styled.div`
  display: flex;
  align-items: center;
  background-color:${themes.common.black_color};
  padding: 8px;
  padding-left:16px;
  gap: 8px;
  cursor: pointer;
  color:#fff;

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


function MessageByPerson() {
    return (
        <StyledElement>
            <SelectPersonStyledElement primaryColor={themes.common.black_color} className='select-person'>
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
            </SelectPersonStyledElement>
        </StyledElement>
    )
}

export default MessageByPerson