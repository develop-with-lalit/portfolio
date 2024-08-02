import { useEffect, useState } from "react";
import GameCard from "../components/Games/GameCard";
import { gamesCollectionData } from "../utils/games";
import { GamesCollection } from "../utils/models";
import { Outlet } from "react-router-dom";

const MiniGames = () => {
  const [gamesList, setGamesList] = useState<GamesCollection[]>([]);

  useEffect(() => {
    setGamesList(gamesCollectionData);
  }, []);

  return (
    <>
      <div className="flex justify-around flex-wrap w-4/5 mx-auto mt-5">
        {gamesList.length ? (
          gamesList.map((game) => {
            return <GameCard key={game.gameId} gameInfo={game} />;
          })
        ) : (
          <div>No Listed Games</div>
        )}
      </div>
    </>
  );
};

export default MiniGames;
