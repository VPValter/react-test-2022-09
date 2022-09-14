import { useState, useEffect } from 'react';
import './App.css';
import BlogList from './BlogList';
import Header from './Header';
import Modal from './Modal';
import { fetchPosts, deletePost, savePost } from './api-calls';

const App = () => {
  const [results, setResults] = useState([]);
  const [appMsg, setAppMsg] = useState('');
  const [modalShown, setModalShown] = useState(false);
  const [postId, setPostId] = useState(undefined);

  const getPosts = () => {
    fetchPosts().then(
      (result) => {
        setResults(result);
        if (!result.resultData.length) {
          setAppMsg('No posts found');
        }
      },
      // (from React docs):
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log(error);
        setAppMsg('An error occured');
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
      () => {
        // REFRESH THE BLOGLIST:
        getPosts();
        // TODO: CLOSE MODAL ( or show a message in it and close it manually ? )
        setModalShown(false);
        setPostId(undefined);
        setAppMsg('Post saved');
      },
      (error) => {
        console.log(error);
        setAppMsg('An error occured');
      }
    );
  };

  const onDelete = (id) => {
    deletePost(id).then(getPosts).then(setAppMsg('Post deleted'));
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
          {appMsg && (
            <div className='error-msg'>
              <span>{appMsg}</span>
              <button type='button' onClick={() => setAppMsg('')}>
                X
              </button>
            </div>
          )}
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
            ''
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
