import { useContext, useState } from 'react';
import styled from 'styled-components';
import MinHeight from '../shareComponents/MinHeight';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../shareComponents/authContext/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
const[error, setError] = useState("");


const {createUser,setUser,updateUserProfile} = useContext(AuthContext);
 const navigate = useNavigate();

 


    const handleRegisterFormSubmit = (e) => {
   e.preventDefault();
   const displayName = e.target.name.value;
   const photoURL = e.target.url.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
  //  console.log(name, photoURL, email, password);
  setError("");
  const passwordRegEx =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
if(!passwordRegEx.test(password)){
   setError(
    "Password must be at least 6 characters and include uppercase, lowercase, number, and special character."
  );
  return;

}
    createUser(email,password)
    .then((result) => {

      const user = result.user
      updateUserProfile({displayName,photoURL})
      .then(() =>{
        
        setUser({...user,displayName,photoURL});
        navigate("/")
        e.target-reset();
      }).catch((error) => {
        toast.error(error.message)
        console.log(error.message);
        
      })

    })
    .catch((err) => {
  console.log(err.message);
  
    });
  
    };

  return (
<MinHeight>
  <ToastContainer position='top-right'/>
        <StyledWrapper>
      <form className="form" onSubmit={handleRegisterFormSubmit}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex flex-col">
          <label>
            <input className="input" name='name' type="text" placeholder required />
            <span>FUll Name</span>
          </label>
          <label>
            <input className="input" name='url' type="url" placeholder required />
            <span>photoURL</span>
          </label>
        </div>  
        <label>
          <input className="input"  name='email' type="email" placeholder required />
          <span>Email</span>
        </label> 
        <label>
          <input className="input" name='password' type="password" placeholder required />
          <span>Password</span>
        </label>
       {
        error && <p className='text-sm text-red-500'>{error}</p>
       }
        <button className="submit">Submit</button>
        <p className="signin">Already have an acount ? <Link to='/login'>Login Now</Link> </p>
      </form>
    </StyledWrapper>
</MinHeight>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #00bfff;
  }

  .title::before {
    width: 18px;
    height: 18px;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #00bfff;
  }

  .message, 
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .signin a {
    color: #00bfff;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #333;
    color: #fff;
    width: 100%;
    padding: 20px 05px 05px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    background-color: #00bfff;
  }

  .submit:hover {
    background-color: #00bfff96;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;

export default Register;
