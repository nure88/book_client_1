import { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import MinHeight from '../shareComponents/MinHeight';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../shareComponents/authContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [toggle, setToggle] = useState(false);
 const {userLogin,forgetUserEmailAndPassword}= useContext(AuthContext);

 const location = useLocation();
 const navigate = useNavigate();
 const EmailRef = useRef(); 

const handleLoginForm = (e) => {
e.preventDefault();
const email = e.target.email.value;
const password = e.target.password.value;

userLogin(email,password)
.then((result) => {
  console.log(result.user);
  navigate(location?.state || "/");
})
.catch((err) => {
  console.log(err.message);
  
})
};

const handleToggle = () =>{
setToggle(!toggle);
};

const forgetUserEmailAndPass = () => {
  const email = EmailRef.current.value;
  if(!email){
    alert("Please enter your email first!");
    return;
  };
  forgetUserEmailAndPassword(email)
  .then(()=> {
    alert("Reset email sent! check your inbox.")
  }).catch((err)=> {
    alert(err.message)
  })
}
  return (
<MinHeight>
        <StyledWrapper>
      <form className="form"  onSubmit={handleLoginForm}>
        <p className="title">Login Now!</p>
        
        <label>
          <input className="input" name='email'ref={EmailRef} type="email" placeholder required />
          <span>Email</span>
        </label> 
        <label className='relative'>
          <input className="input"  name='password' type={toggle? "text":"password"} placeholder required />
          <span>Password</span>
        <button type='button' className='absolute mt-3 -ml-6 cursor-pointer' onClick={handleToggle}>
          {
            toggle? <FaEyeSlash size={20}/> : <FaEye size={20}/>
          }
        </button>

        </label>
 <a className='cursor-pointer' onClick={forgetUserEmailAndPass}>Forget password</a>
        <button className="submit" type='submit'>Login Now</button>
        <p className="signin">Don't have an account? Please <Link to='/register' > Register</Link> 
        
        </p>
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

export default Login;
