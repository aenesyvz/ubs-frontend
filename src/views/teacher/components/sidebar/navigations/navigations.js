import React from 'react'
import styled from 'styled-components';
import { Logout, Settings } from '@mui/icons-material';
import NavigationItem from './navigation_item';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../../../../../components/sidebar/components/section_title/sectionTitle';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';

const StyledElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > .navigations {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    overflow: auto;
    height:100%;
  }

  & > .navigations::-webkit-scrollbar {
    display: none;

  }
`;


function Navigations() {
    let navigate = useNavigate();

    const navigations = [
        {
            icon: <ChatIcon fill="#fff" />,
            text: 'Chats',
            href: '/teacher/chats',
        },
        {
            icon: <PersonPinIcon fill="#fff" />,
            text: 'Students',
            href: '/teacher/students',
        },
        {
            icon: <BusinessCenterIcon fill="#fff" />,
            text: 'Lessons',
            href: '/teacher/lessons',
        },
        {
            icon: <Settings fill="#fff" />,
            text: 'Settings',
            href: '/teacher/settings',
        },
        {
            icon: <Logout fill="#fff" />,
            text: 'Logout',
            onclick: () => {
                localStorage.removeItem("loggedResponse");
                navigate('/', { replace: true });
            }
        },
    ];

    return (
        <StyledElement>
            <SectionTitle text="NAVIGATIONS" />
            <div className="navigations">
                {navigations.map((n, i) => (
                    <NavigationItem key={i} icon={n.icon} text={n.text} href={n.href} onClick={n.onclick ?? null} />
                ))}
            </div>
        </StyledElement>
    );
}

export default Navigations;
