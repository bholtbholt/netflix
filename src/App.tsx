import * as React from 'react';
import { useEffect, useState } from 'react';
import { RepoListItem } from './RepoListItem';
import { RepoListItemLoading } from './RepoListItemLoading';
import { LoadingSpinner } from './LoadingSpinner';
import { Repo } from './github';

export const App: React.FC = () => {
  const initOrg = new URLSearchParams(window.location.search).get('org') || 'netflix';
  const [org, setOrg] = useState<string>(initOrg);
  const [loading, setLoading] = useState<boolean>(true);
  const [repos, setRepos] = useState<Repo[]>([]);

  const fetchRepos = async () => {
    const response = await fetch(`https://api.github.com/orgs/${org}/repos`);
    setLoading(false);

    if (response.ok) {
      const data: Repo[] = await response.json();
      window.history.pushState({}, '', `/?org=${org}`);
      setRepos(data);
    }
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
    <div className="lg:grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
      <header className="lg:sticky lg:h-screen top-0 self-start py-16 lg:py-28">
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-br from-white to-pink-100">
          Github
          <br />
          Repo Search
        </h1>
        <p className="text-2xl lg:text-3xl mb-10 text-pink-50 lg:font-light">
          See Github repos belonging to any organization
        </p>
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
          <label className="flex-1 block">
            <span className="sr-only">Search:</span>
            <input
              type="text"
              name="org"
              className="bg-white py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md border-gray-300 rounded-lg capitalize transition duration-200 ease-in-out disabled:opacity-50"
              placeholder="Search Github organizations"
              value={org}
              disabled={loading}
              onChange={(e) => setOrg(e.currentTarget.value)}
              autoFocus
            />
          </label>
          <button
            className="flex-none text-white py-2 px-4 border border-transparent rounded-lg shadow-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out disabled:opacity-50 inline-flex justify-center items-center"
            type="submit"
            disabled={loading}
          >
            Search
            {loading && <LoadingSpinner className="ml-2 text-xl" />}
          </button>
        </form>
      </header>
      <ul id="repo-list" className="my-6 -mx-4 lg:mx-0">
        {loading && !repos.length && [1, 2, 3, 4, 5].map((i) => <RepoListItemLoading key={i} />)}
        {repos.map((repo) => (
          <RepoListItem key={repo.id} {...repo} />
        ))}
      </ul>
    </div>
  );
};
