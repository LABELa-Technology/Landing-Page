import styled from '@emotion/styled';

const Slogan = styled.h1`
  position: absolute;
  width: 205px;
  height: 75px;
  left: 602px;
  top: 176px;

  font-family: 'Gen Jyuu GothicL';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
  /* identical to box height, or 117% */

  text-align: center;

  background: linear-gradient(180deg, #6600FF 0%, #760283 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0px 4px 16px rgba(0, 102, 255, 0.24);
`;

function App() {
  return (
    <Slogan className='text-3xl font-bold underline'>
      來點AI
    </Slogan>
  );
}

export default App;
