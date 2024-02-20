import GoogleLoginButton from "../components/GoogleLoginButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Logincss.css';
import log from '../assets/images/log.png';

function LoginPage() {
    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh'  }}>
            <div style={{ marginRight: '20px' }}>
                <img src={log} alt="Logo" style={{ width: '85%' }} />
            </div>
            <div style={{ marginLeft: '150px' }}>
                <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px' }}> 
                    <h3>LOGIN</h3>
                    <div style={{ display: 'flex', alignItems: 'center' }}> 
                        <FontAwesomeIcon icon={faEnvelope} style={{color:'#1acfbe'}}/>
                        <label htmlFor="" style={{ marginLeft: '5px' }}>Email</label>
                    </div>
                    <input type="email" required placeholder="name@gmail.com" /> 
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faLock} style={{color:'#1acfbe'}} />
                        <label htmlFor="" style={{ marginLeft: '5px' }}>Password</label> 
                    </div>
                    <input type="Password" required placeholder="*****"/>
                    
                    <div>
                        <span><h5 style={{ margin: '0' }}>Forget Password?</h5></span>
                    </div>
                   
                    <button type="submit">LOGIN</button>

                    <div className="googlelogin">
                        New Here? Create New Account...
                    </div>
                    <hr style={{ marginTop: '20px', marginBottom: '20px' }}></hr>
                    <div className="googlelogin">
                        <GoogleLoginButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
