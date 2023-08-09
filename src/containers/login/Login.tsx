import './Login.scss';
function Login(props: any) {
  return (
    <div className='wrapper-login-page'>
      <form>
        <div className="form-control">
          <label htmlFor="my-input">Email address</label>
          <input id="my-input" aria-describedby="my-helper-text" />
          <span id="my-helper-text">We'll never share your email.</span>
        </div>
      </form>
    </div>
  )
}

export default Login
