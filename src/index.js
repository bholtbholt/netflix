import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

/**
 * Refer to the README for instructions on completing the exercise
 */

const App = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch('https://api.github.com/orgs/Netflix/repos', {
        headers: {
          Authorization: `token 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`,
          Accept: 'application/vnd.github.v3+json',
        },
      });
      const data = await response.json();
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
