import profileImage from './80px-placeholder.jpg';
import blogImage from './100px-placeholder.jpg';

const BlogListItem = ({ blog, onDelete, onEdit }) => {
  const handleEdit = () => {
    onEdit(blog.id);
  };
  const handleDelete = () => {
    onDelete(blog.id);
  };
  return (
    <div className='blog-item'>
      <div className='blog-header'>
        <img src={profileImage} alt='' />
        <div className='title-data'>
          <h3>{blog.title}</h3>
          <small>Created at: {blog.createdAt} by some person</small>
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
