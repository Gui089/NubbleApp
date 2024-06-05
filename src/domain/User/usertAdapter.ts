import { User, UserApi } from "./userTypes";

function toUser(userApi: UserApi): User {
    return {
        id: userApi.id,
        firstName: userApi.first_name,
        lastName: userApi.last_name,
        username: userApi.username,
        email: userApi.email,
        profileUrl: userApi.profile_url,
        isOnline: userApi.is_online,
        fullName: userApi.full_name,
    }
}

export const userAdapter = {
    toUser,
}