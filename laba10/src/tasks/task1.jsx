import React, { useState } from 'react';

const FormComponent = () => {
  const [postData, setPostData] = useState(null);
  const [userData, setUserData] = useState(null);

  const fetchData = async (id) => {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const postData = await postResponse.json();
    setPostData(postData);

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
    const userData = await userResponse.json();
    setUserData(userData);
  };

  return (
    <div>
      <button onClick={() => fetchData(1)}>Загрузить данные</button>
      {postData && userData && (
        <div>
          <h2>{postData.title}</h2>
          <p>{postData.body}</p>
          <p><strong>Имя пользователя:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
      )}
    </div>
    
  );
};

export default FormComponent;
