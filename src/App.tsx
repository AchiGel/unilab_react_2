import styled from "styled-components";
import Header from "./components/Header";
import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePage, { type DogAndCat } from "./components/GamePage";
import TryAgainPage from "./components/TryAgainPage";
import { useQuery } from "@tanstack/react-query";

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 155px;
`;

export type DogType = {
  message: string;
  status: string;
};

export type CatType = {
  id: string;
  url: string;
  width: number;
  height: number;
};

function App() {
  const [gamePage, setGamePage] = useState<string>("home");

  const getDogAndCat = async () => {
    const catUrl = "https://api.thecatapi.com/v1/images/search?limit=10";
    const dogUrl = "https://dog.ceo/api/breeds/image/random";

    const [catRes, dogRes] = await Promise.all([
      fetch(catUrl).then((res) => res.json()),
      fetch(dogUrl).then((res) => res.json()),
    ]);

    const cats = catRes.map((cat: { url: string }) => ({
      url: cat.url,
      type: "cat",
    }));
    const dog = { url: dogRes?.message, type: "dog" };

    return [...cats, dog];
  };

  const {
    data: dogAndCat,
    error,
    isLoading,
  } = useQuery<DogAndCat[]>({ queryKey: ["dogAndCat"], queryFn: getDogAndCat });

  return (
    <div>
      <Header />
      <MainContainer>
        {gamePage === "home" ? (
          <StartGame setGamePage={setGamePage} />
        ) : gamePage === "game" ? (
          error ? (
            "Error fetching dogs"
          ) : isLoading ? (
            "Loading..."
          ) : (
            dogAndCat && <GamePage dogAndCat={dogAndCat} />
          )
        ) : (
          <TryAgainPage />
        )}
      </MainContainer>
    </div>
  );
}

export default App;
