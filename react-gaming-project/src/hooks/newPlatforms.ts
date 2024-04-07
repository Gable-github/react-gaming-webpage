import useData from "./useData";

interface Platform{
    id: string;
    name: string;
    slug: string;
}

const usePlatforms = () => {
    return useData<Platform>('/platforms')
}

export default usePlatforms;