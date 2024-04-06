
import { GameQuery } from "../App";
import useData from "./useData";
import { GenreObject } from "./useGenres";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface GameObjects {
    id: number;
    rating: number;
    name: string;
    background_image: string;
    platforms: {platform: Platform}[];
    metacritic: 92
  }

const useGames = (gameQuery: GameQuery) => {
  return useData<GameObjects>('/games', {params: {genres: gameQuery.genre?.id, platform: gameQuery.platform?.id}}, [gameQuery])
}

export default useGames