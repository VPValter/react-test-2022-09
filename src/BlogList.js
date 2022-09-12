import BlogListItem from './BlogListItem';

const BlogList = ({ blogs, getPosts }) => {
  return (
    <>
      {blogs.map((item) => (
        <BlogListItem key={item.id} blog={item} getPosts={getPosts} />
      ))}
    </>
  );
};

export default BlogList;
