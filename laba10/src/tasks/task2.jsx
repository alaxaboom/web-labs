import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
    const fetchData = async (formData) => {
        
        const response = await fetch("http://localhost:3001/user", {
            method: "POST",
            credentials: "include", // ВАЖНО!
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nickname: `${formData.username}`,
                password: `${formData.password}`
            })
          });
          return response.json(); 
          
    };
    const onClickListener =() =>{
        console.log(fetchData(formData));
    }
  return (
    <form >
      <div>
        <label>Логин:</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
      </div>
      <div>
        <label>Пароль:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <div>
        <label>Повтор пароля:</label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
      </div>
      <button  onClick={onClickListener}>Зарегистрироваться</button>
        <div>
        
        <h2>Ваши данные:</h2>
          <p>логин: {formData.username}</p>
          <p>пароль: {formData.password}</p>
        </div>
    </form>
  );
};

export default RegistrationForm;