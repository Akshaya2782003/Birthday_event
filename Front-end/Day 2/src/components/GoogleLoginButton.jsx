import { GoogleLogin} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function GoogleLoginButton()
{
    return (
      <GoogleLogin 
      onSuccess={credetialResponse =>
    {
      const credetialResponseDecoded = jwtDecode(credetialResponse.credential);
      console.log(credetialResponseDecoded);

    }}
    onError={() => 
    {
      console.log("Login Failed");
    }}
  />
    )
}
export default GoogleLoginButton