import * as React from 'react';
import { useEffect, useState } from 'react';
import { Commit, Repo } from './github';
import { fetchInit } from './apiHelpers';
import { CommitListItem } from './CommitListItem';
import { GitPullRequestIcon, IssueOpenedIcon, StarIcon } from '@primer/octicons-react';

export const RepoListItem: React.FC<Repo> = ({
  description,
  html_url,
  language,
  name,
  open_issues_count,
  owner,
  stargazers_count,
}) => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCommits = async () => {
    const response = await fetch(
      `https://api.github.com/repos/${owner.login}/${name}/commits?per_page=10`,
      fetchInit,
    );
    setLoading(false);
    const data: Commit[] = await response.json();
    setCommits(data);
  };

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    fetchCommits();
  };

  return (
    <li id={name}>
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
      <ul id={`${name}-commits`}>
        {commits.map((commit) => (
          <CommitListItem key={commit.node_id} {...commit} />
        ))}
      </ul>
      {commits.length === 0 && (
        <button type="button" onClick={handleClick} disabled={loading}>
          Load latest commits
        </button>
      )}
    </li>
  );
};
