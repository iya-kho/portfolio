import styled from 'styled-components';

export function Home() {
  const HomeWrap = styled.section`
    height: 100vh;
    padding-top: 200px;
  `;

  const HomeInner = styled.div``;

  return (
    <HomeWrap id="home">
      <HomeInner className="inWrap">
        <p>Hi! I am Iya Khorova, a junior Javascript/React developer from Ukraine</p>
      </HomeInner>
    </HomeWrap>
  );
}
