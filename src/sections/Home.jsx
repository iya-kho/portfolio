import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

import { colors } from '../utils/style/variables';
import myPic from '../assets/images/landingImages/my-pic.png';

const HomeWrap = styled.section`
  height: 100vh;
`;

const HomeInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const TextWrap = styled.div`
  width: 50%;
  & h1 {
    margin: 10px 0;
    font-size: 40px;
  }
  & p {
    font-size: 18px;
  }
`;

const HomePic = styled.div`
  height: 100%;
  width: 50%;
  background-image: url(${myPic});
  background-attachment: fixed;
  background-position-x: 80%;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  &:after {
    content: '';
    background-color: ${colors.primary};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.25;
  }
`;

export function Home() {
  const [linesTyped, setLinesTyped] = useState(0);
  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

  return (
    <HomeWrap id="home">
      <HomeInner className="inWrap">
        <TextWrap>
          <TypeAnimation
            wrapper="p"
            cursor={false}
            className={CURSOR_CLASS_NAME}
            sequence={[
              // eslint-disable-next-line
              `Hi! I'm Iya Khorova,`,
              200,
              el => {
                setLinesTyped(1);
                el.classList.remove(CURSOR_CLASS_NAME);
              },
            ]}
          />
          {linesTyped >= 1 && (
            <TypeAnimation
              wrapper="h1"
              cursor={false}
              className={CURSOR_CLASS_NAME}
              sequence={[
                'a front-end developer',
                100,
                el => {
                  setLinesTyped(2);
                  el.classList.remove(CURSOR_CLASS_NAME);
                },
              ]}
            />
          )}
          {linesTyped >= 2 && (
            <TypeAnimation
              wrapper="p"
              className={CURSOR_CLASS_NAME}
              cursor={false}
              sequence={['based in Ukraine 🩵💛', 100, el => el.classList.remove(CURSOR_CLASS_NAME)]}
            />
          )}
        </TextWrap>
        <HomePic />
      </HomeInner>
    </HomeWrap>
  );
}
