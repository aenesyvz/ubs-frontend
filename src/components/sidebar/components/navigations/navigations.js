import React from 'react'
import styled from 'styled-components';
import { Logout, Settings } from '@mui/icons-material';
import DomainIcon from '@mui/icons-material/Domain';
import NavigationItem from './navigation_item';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../section_title/sectionTitle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

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
            icon: <BusinessCenterIcon fill="#fff" />,
            text: 'Students',
            href: '/admin/students',
        },
        {
            icon: <PersonPinIcon fill="#fff" />,
            text: 'Teacher',
            href: '/admin/teachers',
        },
        {
            icon: <AccountBalanceIcon fill="#fff" />,
            text: 'Deparment',
            href: '/admin/departments',
        },
        {
            icon: <DomainIcon fill="#fff" />,
            text: 'Faculty',
            href: '/admin/faculties',
        },
        {
            icon: <Settings fill="#fff" />,
            text: 'Settings',
            href: '/admin/settings',
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
