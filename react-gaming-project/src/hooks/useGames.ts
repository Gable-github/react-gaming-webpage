
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

const useGames = (selectedGenre: GenreObject | null) => {
  return useData<GameObjects>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id])
}

export default useGames