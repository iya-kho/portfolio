import styled from 'styled-components';

import { aboutText } from '../content/content';

export function About() {
  const About = styled.section`
  `;
  return (
    <About id="about" className='inWrap'>
      <h2>about</h2>
      <p>{aboutText.p1}</p>
      <p>{aboutText.p1}</p>
      <p>{aboutText.p1}</p>
    </About>
  );
}
