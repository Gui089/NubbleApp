import { userApi } from "./userApi";
import { User } from "./userTypes";
import { userAdapter } from "./usertAdapter";


async function getById(id: number): Promise<User> {
  const userAPI = await userApi.getById(id.toString());
  return userAdapter.toUser(userAPI);
}

export const userService = {
  getById,
};