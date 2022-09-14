import { useState, useEffect } from 'react';
import { fetchPost } from './api-calls';

const Modal = ({ closeModal, onSave, postId }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    fetchPost(postId).then((result) => {
      setTitle(result.title);
      setText(result.text);
    });
  }, [postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      text,
      id: postId,
    };
    onSave(postId, formData);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.id === 'title') {
      setTitle(value);
    } else {
      setText(value);
    }
  };

  return (
    <div className='modal close-modal' onClick={closeModal}>
      <div className='modal-content'>
        <div className='modal-header'>
          <strong>Add/Edit blog post {postId}</strong>
          <button type='button' className='close-modal'>
            X
          </button>
        </div>
        <div className='modal-body'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                required
                placeholder='Title of the post'
                value={title}
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='text'>Text</label>
              <textarea
                name='text'
                id='text'
                rows='8'
                required
                placeholder='Text of the post'
                value={text}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='buttons-group'>
              <button>Post</button>
              <button type='button' className='close-modal'>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
