import styled from 'styled-components';

import { aboutText, skillsList } from '../content/content';
import { devices } from '../utils/style/variables';

import { TagsCloud } from '../components';

const AboutStyled = styled.section`\
  @media ${devices.tabletS} {
    width: 100%;
  }

  .aboutText p {
    margin-bottom: 20px;
  }
  .skills {
    margin-top: 50px;
  }
`;

export function About() {
  return (
    <AboutStyled id="about" className="wrapSmall sectionVertPadding">
      <h2>about</h2>
      <div className="aboutText">
        <p>{aboutText.p1}</p>
        <p>{aboutText.p1}</p>
      </div>
      <div className="skills">
        <h4>skills</h4>
        <TagsCloud contentList={skillsList}></TagsCloud>
      </div>
    </AboutStyled>
  );
}
