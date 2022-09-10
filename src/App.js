import { useState, useEffect } from 'react';
import './App.css';
import BlogList from './BlogList';

const App = () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetch('https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts')
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result);
          setResults(result);
        },
        // (from React docs):
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          setErrorMsg('An error occured');
        }
      );
  }, []);

  return (
    <div className='App'>
      <header>HEADER</header>

      {results.resultData && results.resultData.length ? (
        <BlogList blogs={results.resultData} />
      ) : (
        <>
          <p>No posts found</p>
          {errorMsg && <p>{errorMsg}</p>}
        </>
      )}
    </div>
  );
};

export default App;
