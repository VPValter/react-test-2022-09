const BlogList = ({ blogs }) => {
  return (
    <div className="container">
      {blogs.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <small>{item.text}</small>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
