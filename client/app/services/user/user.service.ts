import { randomIntFromInterval } from '@/utils/number/randomIntFromInterval';
import { getUsersUrl } from '@/configs/api.config';
import { IUser } from '@/shared/types/user.types';
import { axiosClassic } from '@/api/interceptors';

export const UserService = {
  async getAllUsers() {
    return axiosClassic.get<IUser[]>(getUsersUrl());
  },
  async getUserById(id: number) {
    return axiosClassic.get<IUser>(getUsersUrl(`/${id}`));
  },
  async getRandomUser() {
    return axiosClassic.get<IUser>(getUsersUrl(`/${randomIntFromInterval(1, 10)}`));
  },
  async deleteUserById(id: number) {
    return axiosClassic.delete<IUser>(getUsersUrl(`/${id}`));
  },
};
