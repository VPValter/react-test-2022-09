import BlogListItem from './BlogListItem';

const BlogList = ({ blogs, onDelete, onEdit }) => {
  return (
    <>
      {blogs.map((item) => (
        <BlogListItem
          key={item.id}
          blog={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  );
};

export default BlogList;
