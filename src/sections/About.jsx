import styled from 'styled-components';

import { aboutText, skillsList } from '../content/content';
import { devices, colors } from '../utils/style/variables';

import { TagsCloud } from '../components';

const AboutStyled = styled.section`
  \ @media ${devices.tabletS} {
    width: 100%;
  }

  .aboutText {
    p, .title {
      display: block;
      margin-bottom: 20px;
    }

    span {
      font-weight: 700;
    }
  }
  .skills {
    margin-top: 50px;
  }
`;

export function About() {
  return (
    <AboutStyled id="about" className="wrapSmall sectionVertPadding">
      <h2>about</h2>
      <div className="aboutText">{aboutText.map(item => item)}</div>
      <div className="skills">
        <h4>skills</h4>
        <TagsCloud contentList={skillsList} color={colors.primary}></TagsCloud>
      </div>
    </AboutStyled>
  );
}
