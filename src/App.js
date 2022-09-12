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

  const getPosts = () => {
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
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='App'>
      <Header />

      <div className='container'>
        <section className='top'>
          <h1>Welcome to my blog</h1>
          <button type='button' onClick={() => setModalShown(true)}>
            Add post
          </button>
        </section>
        <aside>
          <h2>Blog categories</h2>
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </aside>
        <main>
          {results.resultData && results.resultData.length ? (
            <BlogList blogs={results.resultData} getPosts={getPosts} />
          ) : (
            <>
              <p>No posts found</p>
              {errorMsg && <p>{errorMsg}</p>}
            </>
          )}
        </main>
      </div>

      {modalShown && (
        <Modal
          closeModal={closeModal}
          getPosts={getPosts}
          setModalShown={setModalShown}
        />
      )}
    </div>
  );
};

export default App;
