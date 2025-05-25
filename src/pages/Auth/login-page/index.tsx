import './style.scss'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
const LoginPage = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/dashboard')
    }
    return (
        <div>
            <div className="auth-inner login">
                <div className="left-area">
                    {/* <div className="float-area">
                        <h1>Health Pacific Group</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veniam illo delectus distinctio eveniet, animi pariatur ullam eos neque qui itaque. Unde recusandae qui maiores impedit nam officia illo enim, voluptatibus dolorem fugiat sit ex quam. Enim natus eum excepturi dignissimos, dolorum beatae consequuntur accusamus illo. Ad fugiat commodi ipsam?
                        </p>
                    </div> */}
                </div>
                <div className="right-area">
                    <img src={logo} alt="" />
                    <form>
                        <div className="form-group">
                            <input type="email" id="loginEmail" name="loginEmail" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <input type="password" id="loginPassword" name="loginPassword" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group mt-3">
                            <div className="flex-inner">
                                <p>Forget Password?</p>
                            </div>
                        </div>

                        <div className="form-group mt-4">
                            <button className='submit-btn' type='button' onClick={handleLogin}>Login</button>
                        </div>
                    </form>

                    <div className="sso-area mt-4">
                        <p>Or login with</p>
                        <div className="login-social-icons-inner">
                            <span>
                                <img src="http://3.109.198.252/images/login-page/facebook.png?t=1747995452" alt="" width="100%" />
                                Facebook
                            </span>
                            <span>
                                <img src="http://3.109.198.252/images/login-page/google.png?t=1747995452" alt="" width="100%" />
                                Google
                            </span>
                            <span>
                                <img src="http://3.109.198.252/images/login-page/social.png?t=1747995452" alt="" width="100%" />
                                Amazon
                            </span>
                        </div>
                    </div>

                    <p>Don't have an account? <span>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
