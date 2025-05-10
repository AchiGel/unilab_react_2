import styled from "styled-components";

const GamePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
`;

const GameImagesContainer = styled.div`
  max-width: 1140px;
  display: grid;
  grid-template-columns: repeat(5, 190px);
  grid-template-rows: repeat(3, 190px);
  gap: 48px;
`;

const GameFinishContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const GameFinishText = styled.p`
  color: #eff9f3;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const GameFinishButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 9px 16px;
  border-radius: 12px;
  background-color: #33d570;
  color: #fff;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export type DogAndCat = {
  type: string;
  url: string;
};

export default function GamePage({ dogAndCat }: { dogAndCat: DogAndCat[] }) {
  console.log(dogAndCat);
  return (
    <GamePageContainer>
      <GameImagesContainer>
        {dogAndCat.map((el, i) => (
          <img
            style={{ width: "190px", height: "190px" }}
            key={i}
            src={el.url}
          />
        ))}
      </GameImagesContainer>
      <GameFinishContainer>
        <GameFinishText>
          Score: <span>{}</span>
        </GameFinishText>
        <GameFinishText>
          Time: <span>{}</span>
        </GameFinishText>
        <GameFinishButton>Finish Game</GameFinishButton>
      </GameFinishContainer>
    </GamePageContainer>
  );
}
