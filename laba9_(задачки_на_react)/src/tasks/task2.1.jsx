import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const validateForm = () => {
    let newErrors = {};

    if (formData.username === '') {
      newErrors.username = 'Поле "Логин" обязательное.';
    } else if (formData.username.length < 6 || formData.username.length > 20) {
      newErrors.username = 'Логин должен содержать от 6 до 20 символов.';
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.username)) {
      newErrors.username = 'Логин может содержать только буквы латинского алфавита и цифры.';
    }

    if (formData.password === '') {
      newErrors.password = 'Поле "Пароль" обязательное.';
    }

    if (formData.confirmPassword === '') {
      newErrors.confirmPassword = 'Поле "Повтор пароля" обязательное.';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Пароли должны совпадать.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
       setIsSubmitted(true);
      console.log('Форма валидна. Данные могут быть отправлены.');
    } else {
      console.log('Форма содержит ошибки. Пожалуйста, исправьте их.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Логин:</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>Пароль:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Повтор пароля:</label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Зарегистрироваться</button>
      {isSubmitted &&(
        <div>
        <h2>Ваши данные:</h2>
          <p>логин: {formData.username}</p>
          <p>пароль: {formData.password}</p>
        </div>
      )}
    </form>
  );
};

export default RegistrationForm;
