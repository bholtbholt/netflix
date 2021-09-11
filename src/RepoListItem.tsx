import * as React from 'react';
import { Repo } from './github';
import { GitPullRequestIcon, IssueOpenedIcon, StarIcon } from '@primer/octicons-react';

export const RepoListItem: React.FC<Repo> = ({
  description,
  html_url,
  language,
  name,
  open_issues_count,
  stargazers_count,
}) => {
  return (
    <li>
      <h5>
        <a href={html_url} rel="nofollow" target="_blank">
          {name}
        </a>
      </h5>
      {description && <p>{description}</p>}
      <ul>
        <li>
          <a href={`${html_url}/pulls`} rel="nofollow" target="_blank" aria-label="Pull requests">
            <GitPullRequestIcon />
            PRs
          </a>
        </li>
        <li>
          <a href={`${html_url}/issues`} rel="nofollow" target="_blank">
            <IssueOpenedIcon aria-label="Open issues" />
            {open_issues_count}
          </a>
        </li>
        <li>
          <a href={`${html_url}/stargazers`} rel="nofollow" target="_blank">
            <StarIcon aria-label="Star count" />
            {stargazers_count}
          </a>
        </li>
        <li>{language}</li>
      </ul>
    </li>
  );
};
