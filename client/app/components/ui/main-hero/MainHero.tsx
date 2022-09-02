import React, { FC } from 'react';
import Image from 'next/image';

import { SITE_TITLE } from '@/configs/constants';

export const MainHero: FC = () => {
  return (
    <div className="relative overflow-hidden z-0" aria-label="main hero">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="mt-6 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-indigo-600 xl:inline">{SITE_TITLE}</span>
              </h1>
              <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis consequatur doloremque hic
                maxime! Accusamus accusantium alias consequatur consequuntur et exercitationem fuga pariatur perferendis
                voluptate. Nihil officia optio quam suscipit?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=100"
          width={1920}
          height={1280}
          objectFit="contain"
          layout="responsive"
          objectPosition="top"
          alt="banner"
        />
      </div>
    </div>
  );
};
