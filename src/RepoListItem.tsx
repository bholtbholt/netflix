import * as React from 'react';
import { useEffect, useState } from 'react';
import { Commit, Repo } from './github';
import { fetchInit } from './apiHelpers';
import { CommitListItem } from './CommitListItem';
import { LoadingSpinner } from './LoadingSpinner';
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
  const metaButton =
    'rounded-sm hover:text-indigo-800 hover:underline focus:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-indigo-500 transition duration-200 ease-in-out';

  const fetchCommits = async () => {
    const response = await fetch(
      `https://api.github.com/repos/${owner.login}/${name}/commits?per_page=10`,
      fetchInit,
    );
    setLoading(false);

    if (response.ok) {
      const data: Commit[] = await response.json();
      setCommits(data);
    }
  };

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    fetchCommits();
  };

  return (
    <li id={name} className="p-6 mx-auto bg-white rounded-xl shadow-xl mb-3">
      <h5 className="text-3xl font-bold text-gray-900">
        <a className="hover:text-indigo-600" href={html_url} rel="nofollow" target="_blank">
          {name}
        </a>
      </h5>
      {description && <p className="text-gray-500 text-xl">{description}</p>}
      <ul className="flex items-center text-gray-600 mt-6 mb-8 gap-x-8">
        <li className="flex-initial">
          <a
            className={metaButton}
            href={`${html_url}/pulls`}
            rel="nofollow"
            target="_blank"
            aria-label="Pull requests"
          >
            <GitPullRequestIcon className="mr-2" />
            PRs
          </a>
        </li>
        <li className="flex-initial">
          <a className={metaButton} href={`${html_url}/issues`} rel="nofollow" target="_blank">
            <IssueOpenedIcon className="mr-2" aria-label="Open issues" />
            {open_issues_count}
          </a>
        </li>
        <li className="flex-initial">
          <a className={metaButton} href={`${html_url}/stargazers`} rel="nofollow" target="_blank">
            <StarIcon className="mr-2" aria-label="Star count" />
            {stargazers_count}
          </a>
        </li>
        <li className="flex-initial">
          <span className="px-3 inline-flex text-sm font-semibold rounded-full bg-indigo-100 text-indigo-800">
            {language}
          </span>
        </li>
      </ul>
      <div className="pl-4">
        <ul id={`${name}-commits`} className="border-l-4 border-gray-100 pl-3">
          {commits.map((commit) => (
            <CommitListItem key={commit.node_id} {...commit} />
          ))}
        </ul>
      </div>
      {commits.length === 0 && (
        <button
          className="bg-white py-2 px-4 border border-indigo-300 rounded-full shadow-sm text-sm leading-4 font-medium text-indigo-800 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out disabled:opacity-50 inline-flex justify-center items-center"
          type="button"
          onClick={handleClick}
          disabled={loading}
        >
          Load latest commits
          {loading && <LoadingSpinner className="ml-2" />}
        </button>
      )}
    </li>
  );
};
