import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="employee"
                    onClick={toggle}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >
                        Employee Management
                    </SidebarLink>

                    <SidebarLink 
                    to="view" 
                    onClick={toggle}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >
                        Viewing
                    </SidebarLink>

                    <SidebarLink 
                    to="features" 
                    onClick={toggle}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >
                        Features
                    </SidebarLink>

                    <SidebarLink 
                    to="ui" 
                    onClick={toggle}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >
                        UI
                    </SidebarLink>
                    
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
