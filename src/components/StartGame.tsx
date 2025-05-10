import styled from "styled-components";

export const StartGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  max-width: 398px;
  align-items: center;
`;

export const StartGameContainerTitle = styled.h1`
  color: #eff9f3;
  font-family: "Noto Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const StartGameContainerPara = styled.p`
  color: #eff9f3;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StartGameContainerButton = styled.button`
  border: none;
  outline: none;
  padding: 9px 20px;
  border-radius: 12px;
  background-color: #33d570;
  cursor: pointer;

  color: #fff;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default function StartGame({
  setGamePage,
}: {
  setGamePage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <StartGameContainer>
      <StartGameContainerTitle>Start dog finder game</StartGameContainerTitle>
      <StartGameContainerPara>
        You will have to choose an image of a dog from 5 total pictures, try to
        get the highest score
      </StartGameContainerPara>
      <StartGameContainerButton onClick={() => setGamePage("game")}>
        Start Game
      </StartGameContainerButton>
    </StartGameContainer>
  );
}
