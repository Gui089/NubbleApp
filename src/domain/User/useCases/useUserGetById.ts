import { useCallback, useEffect, useState } from "react";
import { User } from "../userTypes";
import { userService } from "../userService";


export function userUserGetById(id:number) {
    const [user, setUser] = useState<User>();
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
    }, [getUserById]);

    return {
        user,
        error,
        loading
    }
}