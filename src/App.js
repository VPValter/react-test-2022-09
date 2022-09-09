import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setResults(result);
        },
        // (from React docs):
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className='App'>
      <p>hello it's-a me, new App component</p>
      {results.resultData && results.resultData.length ? (
        results.resultData.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <small>{item.text}</small>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}

export default App;
