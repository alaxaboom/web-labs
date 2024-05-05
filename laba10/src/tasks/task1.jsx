import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostAndUserInfo = () => {
  const [postId, setPostId] = useState('');
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  const fetchPost = async (id) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных поста:', error);
    }
  };

  const fetchUser = async (userId) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
    }
  };

  useEffect(() => {
    if (post) {
      fetchUser(post.userId);
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchPost(postId);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={postId} onChange={(e) => setPostId(e.target.value)} />
        </label>
        <button type="submit">Получить данные</button>
      </form>
      {post && (
        <div>
          <h2>Пост</h2>
          <p>Заголовок: {post.title}</p>
          <p>Текст: {post.body}</p>
          <h2>Пользователь</h2>
          <p>Имя: {user ? user.name : ''}</p>
          <p>Email: {user ? user.email : ''}</p>
        </div>
      )}
    </div>
  );
};

export default PostAndUserInfo;