import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import { 
    Nav, 
    NavbarContainer,
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
    } from './NavbarElements';
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                     <NavLogo to='/' onClick={toggleHome}>Harvest STMIK</NavLogo>
                     <MobileIcon onClick={toggle}>
                        <FaBars />
                     </MobileIcon>
                     <NavMenu>
                         <NavItem>
                             <NavLinks 
                             to="employee" 
                             smooth={true} 
                             duration={500} 
                             spy={true} 
                             exact='true' 
                             offset={-80}
                             >
                                 Employee Management</NavLinks>
                         </NavItem>
                         <NavItem>
                             <NavLinks 
                             to="view"
                             smooth={true} 
                             duration={500} 
                             spy={true} 
                             exact='true' 
                             offset={-80}
                             >
                                 Viewing</NavLinks>
                         </NavItem>
                         <NavItem>
                             <NavLinks 
                             to="features"
                             smooth={true} 
                             duration={500} 
                             spy={true} 
                             exact='true' 
                             offset={-80}
                             >
                                 Features</NavLinks>
                         </NavItem>
                         <NavItem>
                             <NavLinks 
                             to="ui"
                             smooth={true} 
                             duration={500} 
                             spy={true} 
                             exact='true' 
                             offset={-80}
                             >
                                 UI</NavLinks>
                         </NavItem>
                     </NavMenu>
                     <NavBtn> 
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                     </NavBtn>
                </NavbarContainer>
             </Nav>
        </>
    );
};

export default Navbar;
