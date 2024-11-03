import React from 'react'
import { useNavigate } from 'react-router-dom';
import './FacultyLogin.css'
import { Link } from 'react-router-dom';

function Login() {
    let navigate = useNavigate()
    const loginHandler = (e) => {
        navigate('/faculty');
    }
    return (
        <div className='login-card-section'>
            <div className='card login-card shadow login-card-faculty'>
                <div className='card-body'>
                    <div className='login-card-title-section mb-2'>
                        <h5 class="card-title mb-0">
                            Faculty
                        </h5>
                        <Link to='/' className='ms-3 mt-1 text-decoration-none'>Home</Link>

                    </div>

                    <form onSubmit={(e) => loginHandler(e)}>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={() => console.log('test')}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={() => console.log('test')}
                            />
                        </div>
                        <div className="form-group form-check mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                                onChange={() => console.log('test')}
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <div className='justify-content-center d-flex'>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login