import { useState,  useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface GameObjects {
    id: number;
    rating: number;
    name: string;
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
            err.message}
        );
        
        return () => controller.abort();
    }, []);

    return {games, error};
}

export default useGames