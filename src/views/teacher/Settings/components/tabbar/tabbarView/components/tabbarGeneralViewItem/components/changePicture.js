import React, { useState } from 'react'
import styled from 'styled-components'
import themes from '../../../../../../../../../helpers/themes';
import approvalIcon from "../../../../../../../../../assets/icons/approval.svg"

const StyledElement = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    box-shadow: ${themes.teacher.primary_shadow};
    border-radius:16px;
    padding:12px 24px;

    & > div {
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:16px;

      @media screen and (max-width:400px){
        flex-direction:column;
      }
    }

    & > div > img{ 
      width:64px;
      height:64px;
      border-radius:50%
    }

    & > div > div{ 
      display:grid;
      gap:2px;
    }

    & > div > div > h3{
      font-size:16px;
      font-weight:600;
    }

    
    & > div > div > p{
      font-size:14px;
      font-weight:400;
    }

    & > button{
      background-color: ${themes.teacher.primary};
      color:#FFF;
      font-size:16px;
      font-weight:600;
      border-radius:8px;
      padding:12px 16px;
      outline:none;
      border:none;
    }
    .approval-icon{
      width:28px;
      height:28px;
    }

    @media screen and (max-width:767px){
      gap:12px;
      flex-direction:column;
    }
`;

function ChangePicture() {
  const [isImageLoading, setIsImageLoading] = useState(false);

  return (
    <StyledElement>
      <div>
        {!isImageLoading &&
          <img alt="berkay" src="/assets/images/omu_logo_blue.png" />

        }
        <div>
          <h3>Alper Enes Yavuz</h3>
          <p>alperenesyavuz37@gmail.com</p>
        </div>
        <img className='approval-icon' alt="approval_img" src={approvalIcon}></img>
      </div>
      <button onClick={() => document.querySelector('.selectFile').click()}>Change Picture</button>
      <input type="file" className='selectFile' style={{ display: "none" }} />
    </StyledElement>
  )
}

export default ChangePicture