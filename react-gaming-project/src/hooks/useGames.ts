import { useState,  useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
  
  interface GetGamesResponse {
    count: number;
    next: string;
    previous: string;
    results: GameObjects[];
  }

const useGames = () => {
    const [games, setGames] = useState<GameObjects[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();
      apiClient
        .get<GetGamesResponse>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        }
        );
        
        return () => controller.abort();
    }, []);

    return {games, error};
}

export default useGames