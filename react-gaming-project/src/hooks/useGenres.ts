import useData from "./useData";

export interface GenreObject {
    id:number;
    name:string;
}

const useGenres = ()=>{
    return useData<GenreObject>('/genres');
}

export default useGenres;