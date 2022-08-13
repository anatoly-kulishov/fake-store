import React from 'react';

import { NextPageAuth } from '@/shared/types/auth.types';
import { IUser } from '@/shared/types/user.types';
import { getUsersUrl } from '@/configs/api.config';
import Users from '@/components/screens/users';
import { API_URL } from '@/configs/constants';
import { api } from '@/api/fetch';

export const getStaticProps = async () => {
  const response = await api({ url: `${API_URL}${getUsersUrl()}`, method: 'GET' });
  const { data } = response;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { users: data, fallback: 'blocking' },
  };
};

interface IUsersPage {
  users: IUser[];
}

const UsersPage: NextPageAuth<IUsersPage> = ({ users }) => {
  return <Users users={users} />;
};

UsersPage.isOnlyAdmin = true;

export default UsersPage;
