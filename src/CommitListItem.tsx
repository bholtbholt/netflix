import * as React from 'react';
import { Commit } from './github';

export const CommitListItem: React.FC<Commit> = ({ author, commit, html_url, sha }) => {
  const formattedDate = new Date(commit.author.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <li>
      <a href={html_url} rel="nofollow" target="_blank">
        {commit.message}
      </a>
      <ul>
        <li>
          <a href={author.html_url} rel="nofollow" target="_blank">
            <img
              src={author.avatar_url}
              alt={`Profile picture of ${author.login}`}
              width="20"
              height="20"
            />
            {author.login}
          </a>
        </li>
        <li>{formattedDate}</li>
        <li>{sha.substring(0, 7)}</li>
      </ul>
    </li>
  );
};
