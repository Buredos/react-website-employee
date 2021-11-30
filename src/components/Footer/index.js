import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const toggleHome = () => {
    scroll.scrollToTop();
};

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">How it works</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Locations</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Employee Website</FooterLinkTitle>
                                <FooterLink to="/">Employee Management</FooterLink>
                                <FooterLink to="/">Viewing</FooterLink>
                                <FooterLink to="/">Features</FooterLink>
                                <FooterLink to="/">UI</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            STMIK Harvest
                        </SocialLogo>
                        <WebsiteRights>STMIK Harvest © 2021 All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.instagram.com/stmikharvest" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.facebook.com/stmikharvest" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/channel/UC05Kl8OjoEr_Z20xuTIqccQ" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/stmikharvest" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
