
import { userService } from "../userService";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@infra";


export function userUserGetById(id:number) {

    const {data, isLoading, isError, refetch, isFetching} = useQuery({
        queryKey: [QueryKeys.UserGetById],
        queryFn: () => userService.getById(id),
        staleTime: 1000 * 10,
    });

    return {
        user: data,
        isError,
        isLoading,
        isFetching,
        refetch
    }
}