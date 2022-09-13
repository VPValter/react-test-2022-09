import { useState } from 'react';

const Modal = ({
  closeModal,
  getPosts,
  setModalShown,
  editingPost,
  setEditingPost,
}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      text,
      id: editingPost ? editingPost : 0,
    };
    let options = {};
    let reqUrl = '';

    if (editingPost) {
      // TODO: Send the request for editing
      reqUrl = `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${editingPost}`;
      options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      };
    } else {
      reqUrl = `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts`;
      options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      };
    }

    console.log(reqUrl);
    console.log(options);

    // TODO: Disable button to avoid duplicating requests and/or add loader ??

    fetch(reqUrl, options)
      // .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          // REFRESH THE BLOGLIST:
          getPosts();
          // TODO: CLOSE MODAL ( or show a message in it and close it manually ? )
          setModalShown(false);
          setEditingPost(null);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className='modal close-modal' onClick={closeModal}>
      <div className='modal-content'>
        <div className='modal-header'>
          <strong>Add/Edit blog post {editingPost}</strong>
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
                onChange={(e) => setTitle(e.target.value)}
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
                onChange={(e) => setText(e.target.value)}
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
