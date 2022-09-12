const BlogListItem = ({ blog, getPosts }) => {
  const handleDelete = (id) => {
    console.log(id);
    fetch(
      `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${id}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }
    ).then((res) => {
      console.log(res);
      // REFRESH THE BLOGLIST:
      getPosts();
    });
  };
  return (
    <div className='blog-item'>
      <div className='blog-header'>
        {/* pic */}
        <h3>{blog.title}</h3>
        {/* date */}
        <button type='button'>Edit</button>
        <button
          type='button'
          onClick={() => {
            handleDelete(blog.id);
          }}
        >
          Delete
        </button>
      </div>
      <div className='blog-text'>
        <p>{blog.text}</p>
      </div>
      <div className='blog-images'></div>
    </div>
  );
};

export default BlogListItem;
