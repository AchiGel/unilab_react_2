import {
  StartGameContainer,
  StartGameContainerButton,
  StartGameContainerPara,
  StartGameContainerTitle,
} from "./StartGame";

export default function TryAgainPage() {
  return (
    <StartGameContainer>
      <StartGameContainerTitle>Congratulations!</StartGameContainerTitle>
      <StartGameContainerPara>
        You have scored <span>{}</span> in <span>{}</span>
      </StartGameContainerPara>
      <StartGameContainerButton>Try again</StartGameContainerButton>
    </StartGameContainer>
  );
}
