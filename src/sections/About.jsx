import styled from 'styled-components';

import { aboutText } from '../content/content';

const AboutStyled = styled.section``;

export function About() {
  return (
    <AboutStyled id="about" className='inWrap sectionVertPadding'>
      <h2>about</h2>
      <p>{aboutText.p1}</p>
      <p>{aboutText.p1}</p>
      <p>{aboutText.p1}</p>
    </AboutStyled>
  );
}
