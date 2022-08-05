import axios from 'axios';

import { API_URL } from '@/configs/constants';
import { getUsersUrl } from '@/configs/api.config';

export const UserService = {
  async delete(id: number) {
    await axios.delete<any>(`${API_URL}${getUsersUrl(`/${id}`)}`);
  },
};
