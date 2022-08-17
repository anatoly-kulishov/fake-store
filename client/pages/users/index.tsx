import React from 'react';
import { GetStaticProps } from 'next';

import { UserService } from '@/services/user/user.service';
import { NextPageAuth } from '@/shared/types/auth.types';
import { IUser } from '@/shared/types/user.types';
import Users from '@/components/screens/users';

/**
 * Получает данные для статической генерации.
 * Когда использовать?
 * Данные для рендера доступны во время сборки
 * Данные могут быть публично закэшированы
 * Страница должна быть доступна для индексирования
 */
export const getStaticProps: GetStaticProps = async () => {
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
