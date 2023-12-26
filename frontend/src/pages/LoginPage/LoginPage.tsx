import React from 'react';
import './LoginPage.css';
import { Link,useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { username, password } = {
      username: data.get('username'),
      password: data.get('password'),
    };
    // check data from back-end
    // if done rediect to dashboard
    navigate('/dashboard');
    console.log({
      username, password
    });
  }
  return (
    <section className="position-relative py-4 py-xl-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2>Log in</h2>
              <p className="w-lg-50 m-auto">Hệ thống quản trị dữ liệu server</p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-4">
              <div className="card mb-5">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4"><svg className="bi bi-person" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg></div>
                  <form className="text-center" method="post" onSubmit={handleSubmit}>
                    <div className="mb-3"><input className="form-control" type="text" name="username" placeholder="Username" /></div>
                    <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">
                    Login
                      </button></div>
                    <p className="text-muted">Forgot your password?</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}



export default LoginPage;