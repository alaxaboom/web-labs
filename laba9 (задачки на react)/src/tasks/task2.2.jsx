import React, { useState } from 'react';

const ProfileEditForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    birthDate: '',
    address: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='formWithValidation'>
        <div>
          <label htmlFor='form_fname'>Имя: </label>
          <input type='text' className='form_name field' name='firstName' value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='form_surname'>Фамилия: </label>
          <input type='text' className='form_surname field' name='lastName' value={formData.lastName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='form_middleName'>Отчество: </label>
          <input type='text' className='form_middleName field' name='middleName' value={formData.middleName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='form_birthDate'>Дата рождения: </label>
          <input type='text' className='form_birthDate field' name='birthDate' value={formData.birthDate} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='form_address'>Адрес: </label>
          <input type='text' className='form_address field' name='address' value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <input type="submit" className="validateBtn" value='изменить' />
        </div>
      </form>
      {isSubmitted && (
        <div>
          <h2>Ваши данные:</h2>
          <p>Имя: {formData.firstName}</p>
          <p>Фамилия: {formData.lastName}</p>
          <p>Отчество: {formData.middleName}</p>
          <p>Дата рождения: {formData.birthDate}</p>
          <p>Адрес: {formData.address}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileEditForm;
