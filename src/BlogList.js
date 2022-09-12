import BlogListItem from './BlogListItem';

const BlogList = ({ blogs, getPosts }) => {
  return (
    <div className='container'>
      {blogs.map((item) => (
        <BlogListItem key={item.id} blog={item} getPosts={getPosts} />
      ))}
    </div>
  );
};

export default BlogList;
