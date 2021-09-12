import * as React from 'react';
import { Commit } from './github';
import { CommitIcon } from '@primer/octicons-react';

export const CommitListItem: React.FC<Commit> = ({ author, commit, html_url, sha }) => {
  const formattedDate = new Date(commit.author.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <li className="flex items-start -ml-7 mt-6">
      <CommitIcon className="flex-shrink-0 mr-3 text-green-500 bg-white" size={28} />
      <div className="flex-1">
        <a
          className="text-lg font-semibold text-indigo-800 hover:text-indigo-600 mb-1 inline-block"
          href={html_url}
          rel="nofollow"
          target="_blank"
        >
          {commit.message}
        </a>
        <ul className="flex items-center flex-wrap gap-x-4 text-gray-600">
          {author ? (
            <li className="flex items-center text-sm">
              <a
                className="flex items-center font-semibold hover:underline mr-1"
                href={author.html_url}
                rel="nofollow"
                target="_blank"
              >
                <img
                  className="rounded-full mr-1"
                  src={author.avatar_url}
                  alt={`Profile picture of ${author.login}`}
                  width="24"
                  height="24"
                />
                {author.login}
              </a>
              <span className="hidden md:inline md:mr-1">committed on</span>
              {formattedDate}
            </li>
          ) : null}
          <li className="font-mono leading-5 font-semibold tracking-wide text-2xs bg-gray-100 px-2">
            {sha.substring(0, 7)}
          </li>
        </ul>
      </div>
    </li>
  );
};
