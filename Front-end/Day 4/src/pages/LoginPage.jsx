import GoogleLoginButton from "../components/GoogleLoginButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Logincss.css';
import { Link } from "react-router-dom";
function LoginPage() 
{
   
    return (
        <div className="bg">
            <form>
        <div style={{ display: "flex", justifyContent: 'flex-start', alignItems: 'center', height: '100vh' ,marginLeft:'5%' }}>
            <div >
                <form style={{ border: '2px solid #26867e', padding: '20px', borderRadius: '10px',width:'100%',marginLeft:'50%' }}> 
                    <h3>LOGIN</h3>
                    <div style={{ display: 'flex', alignItems: 'center' }}> 
                        <FontAwesomeIcon icon={faEnvelope} style={{color:'#26867e'}}/>
                        <label htmlFor="" style={{ marginLeft: '5px' }}>Email</label>
                    </div>
                    <input type="email" required placeholder="name@gmail.com" /> 
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faLock} style={{color:'#26867e'}} />
                        <label htmlFor="" style={{ marginLeft: '5px' }}>Password</label> 
                    </div>
                    <input type="Password" required placeholder="*****"/>
                    
                    <div>
                        <span><h6 style={{ margin: '0' }}>Forget Password?</h6></span>
                    </div>
                   
                    <button type="submit" style={{marginTop:'15px'}} >LOGIN</button>

                    <div className="googlelogin">
                        <Link to='/signup'>
                        New Here? Create New Account...
                        </Link>
                    </div>
                    <hr style={{ marginTop: '20px', marginBottom: '20px' }}></hr>
                    <div className="googlelogin">
                        <GoogleLoginButton />
                    </div>
                </form>
            </div>
        </div>
        </form>
        </div>
    )
}

export default LoginPage;