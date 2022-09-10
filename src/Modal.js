const Modal = ({ closeModal }) => {
  return (
    <div className='modal close-modal' onClick={closeModal}>
      <div className='modal-content'>
        <div className='modal-header'>
          <strong>Add/Edit blog post</strong>
          <button type='button' className='close-modal'>
            X
          </button>
        </div>
        <div className='modal-body'>
          <form>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                required
                placeholder='Title of the post'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='postText'>Text</label>
              <textarea
                name='postText'
                id='postText'
                rows='8'
                required
                placeholder='Text of the post'
              ></textarea>
            </div>
            <div className='buttons-group'>
              <button type='button'>Post</button>
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
