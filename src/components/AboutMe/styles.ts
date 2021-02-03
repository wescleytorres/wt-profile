import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 2/5;
  grid-row: 1/2;

  display: flex;
  flex-direction: column;

  > img {
    width: 300px;
    margin-top: 10px;
  }

  @media (max-width: 900px) {
    align-items: center;

    > img {
      width: 250px;
    }
  }
`;

export const Content = styled.div`
  background: #fdf5d8;
  border-radius: 15px;
  border: 2px solid #fdf5d8;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > img {
    width: 250px;
    margin: 5px 0 0 5px;
  }

  section {
    background: #222;
    height: 150px;
    padding: 5px 15px;

    display: flex;
    flex-direction: row;

    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  @media (max-width: 900px) {
    align-items: center;

    > img {
      width: 200px;
      margin: 5px 0 0 5px;
    }

    section {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: auto;
    }
  }
`;

export const Info = styled.div`
  width: 240px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    background: #141414;
    width: 155px;
    padding: 0 5px;

    border-radius: 4px;
  }
  span,
  a {
    color: #00e676;
    font-size: 12px;
  }

  a {
    text-decoration: none;

    &:hover {
      color: #fdf5d8;
      transition: all 0.2s;
    }
  }

  &:last-child {
    margin-top: 52px;
  }

  @media (max-width: 900px) {
    &:last-child {
      margin-top: 20px;
    }
  }
`;

export const PrimaryInfo = styled.div``;

export const SecondaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 15px;

  justify-content: space-between;

  div {
    width: 90%;
  }
  img {
    width: 95%;
  }

  @media (max-width: 900px) {
    margin-left: 0;
    margin-top: 10px;
    align-items: center;

    img {
      margin-top: 15px;
    }
  }
`;

export const InfoSoftSkill = styled(Info)`
  flex-direction: column;
  align-items: flex-start;

  width: 370px;

  &:last-child {
    margin-top: 0;
  }

  @media (max-width: 900px) {
    align-items: center;

    div {
      width: 290px;
    }
  }
`;
