import * as React from 'react';
import { useEffect, useState } from 'react';
import { RepoListItem } from './RepoListItem';
import { Repo } from './github';

export const App: React.FC = () => {
  const [org, setOrg] = useState<string>('netflix');
  const [loading, setLoading] = useState<boolean>(true);
  const [repos, setRepos] = useState<Repo[]>([]);

  const fetchRepos = async () => {
    const response = await fetch(`https://api.github.com/orgs/${org}/repos`, {
      headers: {
        Authorization: `token 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`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    setLoading(false);
    const data: Repo[] = await response.json();
    setRepos(data);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    fetchRepos();
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="App">
      <h1>Github Repo Search</h1>
      <p>See Github repos belonging to any organization</p>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input
            type="text"
            name="org"
            placeholder="Search Github organizations"
            value={org}
            disabled={loading}
            onChange={(e) => setOrg(e.currentTarget.value)}
            autoFocus
          />
        </label>
        <button type="submit" disabled={loading}>
          Search
        </button>
        {loading && 'loading'}
      </form>
      <ul id="repo-list">
        {repos.map((repo) => (
          <RepoListItem key={repo.id} {...repo} />
        ))}
      </ul>
    </div>
  );
};
