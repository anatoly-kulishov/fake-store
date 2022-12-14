import React, { FC } from 'react';
import Link from 'next/link';

import { IBreadcrumbProps } from '@/components/ui/breadcrumb/Breadcrumb.props';

export const Breadcrumb: FC<IBreadcrumbProps> = ({ startPath, paths, endPath, ...rest }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb" {...rest}>
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href={startPath.href}>
            <a className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 cursor-pointer">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span className="">{startPath.title}</span>
            </a>
          </Link>
        </li>
        {paths?.map(path => (
          <li key={path.href}>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link href={path.href}>
                <a className="ml-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 md:ml-2 cursor-pointer">
                  {path.title}
                </a>
              </Link>
            </div>
          </li>
        ))}
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-700 md:ml-2">{endPath}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};
