import * as React from 'react';
import { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Repo } from './github';

import './styles.css';

const App: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch('https://api.github.com/orgs/Netflix/repos', {
        headers: {
          Authorization: `token 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`,
          Accept: 'application/vnd.github.v3+json',
        },
      });
      const data: Repo[] = await response.json();
      setRepos(data);
    };
    fetchRepos();
  }, []);

  return (
    <div className="App">
      <h1>Github Repo Search</h1>
      {repos.map((repo) => (
        <div>{repo.name}</div>
      ))}
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
