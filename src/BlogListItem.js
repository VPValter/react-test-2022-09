import profileImage from './80px-placeholder.jpg';
import blogImage from './100px-placeholder.jpg';

const BlogListItem = ({ blog, onDelete, onEdit }) => {
  const handleEdit = () => {
    onEdit(blog.id);
  };
  const handleDelete = () => {
    onDelete(blog.id);
  };
  const created = new Date(blog.createdAt);

  return (
    <div className='blog-item'>
      <div className='blog-header'>
        <img src={profileImage} alt='' />
        <div className='title-data'>
          <h3>{blog.title}</h3>
          <small>
            Posted date: {created.toLocaleDateString('sr-RS')} at{' '}
            {created.toLocaleTimeString('sr-RS', { timeStyle: 'short' })} by
            some person
          </small>
        </div>
        <button type='button' onClick={handleEdit}>
          Edit
        </button>
        <button type='button' onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div className='blog-text'>
        <p>{blog.text}</p>
      </div>
      <div className='blog-images'>
        <img src={blogImage} alt='' />
        <img src={blogImage} alt='' />
        <img src={blogImage} alt='' />
      </div>
    </div>
  );
};

export default BlogListItem;
