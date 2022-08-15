import React from 'react';

import { UserService } from '@/services/user/user.service';
import { NextPageAuth } from '@/shared/types/auth.types';
import { IUser } from '@/shared/types/user.types';
import Users from '@/components/screens/users';

export const getStaticProps = async () => {
  const { data: users } = await UserService.getAllUsers();

  if (!users) {
    return {
      notFound: true,
    };
  }

  return {
    props: { users, fallback: 'blocking' },
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
