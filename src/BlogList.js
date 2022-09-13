import BlogListItem from './BlogListItem';

const BlogList = ({ blogs, getPosts, setModalShown, setEditingPost }) => {
  return (
    <>
      {blogs.map((item) => (
        <BlogListItem
          key={item.id}
          blog={item}
          getPosts={getPosts}
          setModalShown={setModalShown}
          setEditingPost={setEditingPost}
        />
      ))}
    </>
  );
};

export default BlogList;
