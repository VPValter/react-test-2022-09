const BlogList = ({ blogs }) => {
  return (
    <>
      {blogs.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <small>{item.text}</small>
        </div>
      ))}
    </>
  );
};

export default BlogList;
