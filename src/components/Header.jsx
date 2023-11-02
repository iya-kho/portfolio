// import { Link, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { colors, otherVariables } from '../utils/style/variables';

export function Header() {
  const Header = styled.header`
    background-color: ${colors.primary};
    height: ${otherVariables.headerHeight};
    position: fixed;
    top: 0;
    width: 100%;
  `;

  return (
    <Header>
      <p>LOGO</p>
      <nav>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >home</Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >about</Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >projects</Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >contact</Link>
      </nav>
    </Header>
  );
}
