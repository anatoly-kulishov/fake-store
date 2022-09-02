import React from 'react';
import { GetStaticPaths } from 'next';

import SingleUser from '@/components/screens/single-user';
import { UserService } from '@/services/user/user.service';
import { NextPageAuth } from '@/shared/types/auth.types';
import { IUser } from '@/shared/types/user.types';

/**
 * Получает пути страниц для статической генераций.
 * Когда использовать?
 * Для рендера страниц с динамическими адресами
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const { data: users } = await UserService.getAllUsers();

  const paths = users.map(({ id }: { id: number }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

/**
 * Получает данные для статической генерации
 * Когда использовать?
 * Данные для рендера доступны во время сборки
 * Данные могут быть публично закэшированы
 * Страница должна быть доступна для индексирования
 */
export const getStaticProps = async (context: { params: IUser }) => {
  const { id } = context.params;
  const { data: user } = await UserService.getUserById(id);

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user },
  };
};

interface IUserProps {
  user: IUser;
}

const UserPage: NextPageAuth<IUserProps> = ({ user }) => {
  return <SingleUser user={user} />;
};

UserPage.isOnlyAdmin = true;

export default UserPage;
