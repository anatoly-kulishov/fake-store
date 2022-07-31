import React, { FC } from 'react';

import Meta from '../../app/components/shared/meta';
import Heading from '../../app/components/ui/heading';
import { IUser } from '../../app/shared/models/user';
import { API_URL } from '../../app/shared/constants';

export const getStaticPaths = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();

  const paths = data.map(({ id }: { id: number }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: IUser }) => {
  const { id } = context.params;
  const response = await fetch(`${API_URL}/users/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user: data, fallback: 'blocking' },
  };
};

interface IUserProps {
  user: IUser;
}

const User: FC<IUserProps> = ({ user }) => {
  return (
    <Meta title={user?.username}>
      <div className="max-w-xl container mx-auto pt-5 mt-[50px] text-center">
        <Heading tag="h2" text={user?.username} />
        <p>{user?.password}</p>
      </div>
    </Meta>
  );
};

export default User;
