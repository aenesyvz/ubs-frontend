import React from 'react';
import styled from 'styled-components';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const anyNotification = true;

const StyledElement = styled.div`
  cursor: pointer;

  & > .notification_circle {
    height: 12px;
    width: 12px;
    border-radius: 100px;
    background-color: ${(props) => props.primarycolor};

    position: absolute;
    margin-left: 17px;
    margin-top: 2px;
  }

  & > svg {
    height: 32px;
    width: 32px;
  }
`;

const onClick = () => {
    const modal = document.getElementById('notifications_modal');
    modal.style.display = 'flex';
};

function Notifications({ primaryColor }) {
    return (
        <StyledElement primarycolor={primaryColor} onClick={onClick}>
            {anyNotification && <div className="notification_circle"></div>}
            <NotificationsNoneIcon />
        </StyledElement>
    );
}

export default Notifications;
