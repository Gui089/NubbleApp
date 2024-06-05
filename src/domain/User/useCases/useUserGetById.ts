
import { userService } from "../userService";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@infra";


export function userUserGetById(id:number) {
    /* const [user, setUser] = useState<User>();
    const [error, setError] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(false);

    const getUserById = useCallback(async () => {
        try {
            const _user = await userService.getById(id);
            setUser(_user);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        getUserById();
    }, [getUserById]); */

    const {data, isLoading, isError} = useQuery({
        queryKey: [QueryKeys.UserGetById],
        queryFn: () => userService.getById(id),
    });

    return {
        user: data,
        isError,
        isLoading
    }
}