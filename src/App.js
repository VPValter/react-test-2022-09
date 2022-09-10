import { useState, useEffect } from 'react';
import './App.css';
import BlogList from './BlogList';
import Header from './Header';
import Modal from './Modal';

const App = () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [modalShown, setModalShown] = useState(false);

  const closeModal = (event) => {
    if (event.target.className.includes('close-modal')) {
      setModalShown(false);
    }
  };

  useEffect(() => {
    fetch('https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts')
      .then((res) => res.json())
      .then(
        (result) => {
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
      <Header />

      <button type='button' onClick={() => setModalShown(true)}>
        Show modal
      </button>

      {results.resultData && results.resultData.length ? (
        <BlogList blogs={results.resultData} />
      ) : (
        <div className='container'>
          <p>No posts found</p>
          {errorMsg && <p>{errorMsg}</p>}
        </div>
      )}

      {modalShown && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default App;
