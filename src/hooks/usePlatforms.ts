import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () =>
    useQuery({
        queryKey: ["platforms"],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Platform>>("/platforms/lists/parents")
                .then((response) => response.data),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { results: platforms, count: platforms.length },
    });

export default usePlatforms;
