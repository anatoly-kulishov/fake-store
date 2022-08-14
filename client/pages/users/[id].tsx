import React from 'react';

import SingleUser from '@/components/screens/single-user';
import { NextPageAuth } from '@/shared/types/auth.types';
import { IUser } from '@/shared/types/user.types';
import { UserService } from '@/services/user/user.service';

export const getStaticPaths = async () => {
  const { data: users } = await UserService.getAllUsers();

  const paths = users.map(({ id }: { id: number }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: IUser }) => {
  const { id } = context.params;
  const { data: user } = await UserService.getUserById(id);

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user, fallback: 'blocking' },
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
