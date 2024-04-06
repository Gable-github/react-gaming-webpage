
import useData from "./useData";

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

const useGames = () => {
  return useData<GameObjects>('/games')
}

export default useGames