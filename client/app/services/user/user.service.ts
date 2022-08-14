import axios from 'axios';

import { randomIntFromInterval } from '@/utils/number/randomIntFromInterval';
import { getUsersUrl } from '@/configs/api.config';
import { IUser } from '@/shared/types/user.types';
import { API_URL } from '@/configs/constants';

export const UserService = {
  async getAllUsers() {
    return axios.get<IUser[]>(`${API_URL}${getUsersUrl()}`);
  },
  async getUserById(id: number) {
    return axios.get<IUser>(`${API_URL}${getUsersUrl(`/${id}`)}`);
  },
  async getRandomUser() {
    return axios.get<IUser>(`${API_URL}${getUsersUrl(`/${randomIntFromInterval(1, 10)}`)}`);
  },
  async deleteUserById(id: number) {
    return axios.delete<IUser>(`${API_URL}${getUsersUrl(`/${id}`)}`);
  },
};
