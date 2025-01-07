import { UserListResponse } from "../interfaces/reqres.response";
import axios from "axios";

export const loadUsersAction = async (page: number) => {
  try {
    const { data } = await axios.get<UserListResponse>(
      `https://reqres.in/api/users`,
      {
        params: {
          page: page,
        },
      }
    );

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
