import { Link } from 'react-router-dom';
import imgLogin from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
const {createUser} = useContext(AuthContext)
    const handleLSignUp = (event) => {
        event.preventDefault();
const form = event.target;
const name = form.name.value;
const email = form.email.value;
const password = form.password.value;
console.log(name, email, password);

createUser(email, password)
.then(result => {
    const user = result.user
    console.log(user)
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
  <form onSubmit={handleLSignUp} className="card-body">
  <h1 className="text-3xl text-center font-bold">Sign Up</h1>
    <div className="form-control">
      <label className="label">
        <span className="label-text">name</span>
      </label>
      <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
    </div>
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
      <button className="btn btn-primary">sign Up</button>
    </div>
  </form>
  <p className='text-red-800 text-center'>Already Have an Account ?  <Link to='/login'>login</Link></p>
</div>
</div>
</div>
    </div>
    );
};

export default SignUp;