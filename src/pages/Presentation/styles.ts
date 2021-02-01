import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1000px;
  height: 500px;
  padding: 15px;
  margin: 0 30px;
  box-shadow: 20px 20px 50px #12121280;
  border-radius: 15px;
  background: #ffffff1b;
  overflow: hidden;
  border-top: 1px solid #ffffff80;
  border-left: 1px solid #ffffff80;
  backdrop-filter: blur(5px);
  z-index: 1;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr 1fr;
  gap: 15px;
`;
