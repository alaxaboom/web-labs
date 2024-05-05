import { useState } from "react";
import RegistrationForm from "./registration";
import LoginForm from "./login";
const Create = () => {
  // const [nickname, setNickname] = useState('');
  // const [password, setPassword] = useState('');
  // const handleSubmitregistretion = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:3001/user', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       nickname: nickname,
  //       password: password
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error('Error:', error));
  // }
  // const handleSubmitlogin = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:3001/auth', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       nickname: nickname,
  //       password: password
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error('Error:', error));
  // }

  return (
    <div classnickname="create">
      <div><RegistrationForm/></div>
      <div><LoginForm/></div>
      {/* <form onSubmit={handleSubmitregistretion}>
        <label>nickname:</label>
        <input 
          type="text" 
          required 
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <br/>
        <label>password:</label>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br/>
        <button>регистрация</button>
      </form>




      <form onSubmit={handleSubmitlogin}>
        <label>nickname:</label>
        <input 
          type="text" 
          required 

        />
        <br/>
        <label>password:</label>
        <input
          required

        ></input> <br/>
        <button>авторизация</button>
      </form> */}
    </div>
  );
}

 
export default Create;