import React, { FC, useState } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

import Input from '@/components/ui/form-elements/input';
import SearchIcon from '@/components/shared/icons/SearchIcon';
import { AppRouteKeys, AppRoutesEnum } from '@/shared/types/routes.types';
import { keyEventHandler } from '@/utils/events/keyEventHandler';
import { KeyCodeEnum } from '@/shared/types';

import { SearchProps } from './Search.props';
import styles from './Search.module.scss';

const Search: FC<SearchProps> = ({ className, ...props }) => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () =>
    router.push({
      pathname: AppRoutesEnum.SEARCH,
      query: {
        q: search,
      },
    });

  return (
    <div className="inline-flex">
      <div className={cn(className, styles.search)} {...props}>
        <Input
          className={styles.input}
          placeholder="Search here..."
          value={search}
          onKeyDown={e => !!search.length && keyEventHandler(e.code, goToSearch, [KeyCodeEnum.ENTER])}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          className={cn(
            'inline-flex items-center justify-center bg-indigo-600 rounded-md text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out',
            styles.button,
          )}
          aria-label={AppRouteKeys.SEARCH}
          onClick={goToSearch}
          disabled={!search.length}
        >
          <SearchIcon size="15px" fill="white" />
        </button>
      </div>
    </div>
  );
};

Search.displayName = 'Search';

export default Search;
