import { Link, useLocation, useNavigate } from 'react-router-dom';
import imgLogin from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';

const Login = () => {
  const {signIn, googlerlogin} = useContext(AuthContext)

const location = useLocation();
const navigate = useNavigate();

const handleGoogle = () => {
  googlerlogin()
  .then((result) => {
const google = result.user;
navigate(location?.state ? location?.state : '/');
console.log(google);
  })
  .catch((err) => {
    console.log(err);
  });
};

  const handleLogin = (event) => {
    event.preventDefault();
const form = event.target;
const email = form.email.value;
const password = form.password.value;
console.log( email, password);

signIn(email, password)
.then(result => {
const loggedInUser = result.user
console.log(loggedInUser)
const user = {email}

// get access token
axios.post('http://localhost:5000/jwt', user , {withCredentials: true})
.then(res => {
  console.log(res.data);
  if (res.data.success) {
    navigate(location?.state ? location.state : '/');

  }
})
.catch(err => {
  console.error(err);
})



})
.catch(error => {
console.log(error)
})

  }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="mr-12 w-1/2">
   <img src={imgLogin} alt="" />
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <button className='text-red-800' onClick={handleGoogle}>google login</button>

      </form>
      <p className='text-red-800 text-center'>new to car Doctors  <Link to='/signup'>Sing Up</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;