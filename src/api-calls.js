export const fetchPosts = () => {
  return fetch(
    'https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts'
  ).then((res) => res.json());
};

export const fetchPost = (id) => {
  return fetch(
    `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${id}`
  )
    .then((res) => res.json())
    .then((data) => data.resultData);
};

export const deletePost = (id) => {
  return fetch(
    `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${id}`,
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }
  );
};

export const savePost = (id, formData) => {
  const url = `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts${
    id ? `/${id}` : ''
  }`;
  const method = id ? 'PUT' : 'POST';
  return fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
};
