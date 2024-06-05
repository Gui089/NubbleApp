import { api } from "@api";
import { UserApi } from "./userTypes";

const PATH = 'users';

async function getById(userId: string): Promise<UserApi> {
    const response = await api.get(`${PATH}/${userId}`);
    return response.data;
}

export const userApi = {
    getById,
}