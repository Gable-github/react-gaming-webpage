import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface GenreObject {
    id:number;
    name:string;
}

interface GetGenreResponse {
    count: number;
    results: GenreObject[];
}

const useGenres = ()=>{
    const [genres, setGenres] = useState<GenreObject[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();

        setLoading(true)
      apiClient
        .get<GetGenreResponse>("/genres", {signal: controller.signal})
        .then((res) => {
          setGenres(res.data.results)
          setLoading(false)
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        });
        
        return () => controller.abort();
    }, []);

    return {genres, error, isLoading};
}

export default useGenres;