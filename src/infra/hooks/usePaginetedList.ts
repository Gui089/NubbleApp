
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Page } from "src/types/Post";

interface UsePaginetedListREsult<TData> {
    posts:TData[],
    isError: boolean | null;
    isLoading: boolean;
    refresh:() => void;
    fetchNextPage:() => void;
    hasNextPage: boolean;
} 
export const usePaginetedList = <Data>(
    queryKey: readonly unknown[],
    getList: (page: number) => Promise<Page<Data>>)
: UsePaginetedListREsult<Data> => {

    const [posts, setPosts] = useState<Data[]>([]);

    const query = useInfiniteQuery({
        queryKey,
        queryFn:({pageParam = 1}) => getList(pageParam),
        getNextPageParam: ({meta}) => 
            meta.hasPreviousPage ? meta.currentPage + 1 : undefined,
    });

    useEffect(() => {
        if(query.data) {
            const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
                return [...prev, ...curr.data];

                }, []);
            setPosts(newList);
        }
    }, [query.data]);

    return {
        posts,
        isError: query.isError,
        isLoading: query.isLoading,
        refresh: query.refetch,
        fetchNextPage: query.fetchNextPage,
        hasNextPage: !!query.hasNextPage,
    }
}