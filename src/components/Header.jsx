import { useState, useEffect } from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import { colors, otherVariables } from '../utils/style/variables';

const HeaderWrap = styled.header`
  background-color: ${colors.primary};
  height: ${otherVariables.headerHeight};
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  &:after {
    content: '';
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 300ms ease;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
  }

  &.scrolled:after {
    transform: scaleX(1);
  }

  &.scrolled .indexTop {
    color: #000;
    z-index: 3;
  }
`;

const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  cursor: pointer;
`;

const NavBar = styled.nav``;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  margin-right: 30px;
  cursor: pointer;
`;

const scrollToTop = () => {
  scroll.scrollToTop();
};

export function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderWrap className={scrollTop === 0 ? '' : 'scrolled'}>
      <HeaderInner className="inWrap">
        <Logo onClick={() => scrollToTop()} className='indexTop'>
          <p>LOGO</p>
        </Logo>
        <NavBar className='indexTop'>
          <StyledLink activeClass="active" to="home" spy={true} smooth={true} duration={500}>
            home
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            about
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            projects
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            contact
          </StyledLink>
        </NavBar>
      </HeaderInner>
    </HeaderWrap>
  );
}
