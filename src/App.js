import { useState, useEffect } from 'react';
import './App.css';
import BlogList from './BlogList';
import Header from './Header';
import Modal from './Modal';
import { fetchPosts, deletePost, savePost } from './api-calls';

const App = () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [modalShown, setModalShown] = useState(false);
  const [postId, setPostId] = useState(undefined);

  const getPosts = () => {
    fetchPosts().then(
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

  const closeModal = (event) => {
    if (event.target.className.includes('close-modal')) {
      setModalShown(false);
      setPostId(undefined);
    }
  };

  const onSave = (id, formData) => {
    savePost(id, formData).then(
      (data) => {
        // REFRESH THE BLOGLIST:
        getPosts();
        // TODO: CLOSE MODAL ( or show a message in it and close it manually ? )
        setModalShown(false);
        setPostId(undefined);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const onDelete = (id) => {
    deletePost(id).then(getPosts);
  };

  const onEdit = (id) => {
    setModalShown(true);
    setPostId(id);
  };

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
            <BlogList
              blogs={results.resultData}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ) : (
            <>
              <p>No posts found</p>
              {errorMsg && <p>{errorMsg}</p>}
            </>
          )}
        </main>
      </div>

      {modalShown && (
        <Modal closeModal={closeModal} onSave={onSave} postId={postId} />
      )}
    </div>
  );
};

export default App;
