import Cookies from "js-cookie";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate()
    const checkLogin = () => {
        var token = Cookies.get('token');
        if (token) {
            var decoded = jwt_decode(token)
            if(decoded) {   
                alert('Welcome')
            } else {
                console.log("not token found");
            }
        } else {
            navigate("/login");
        }
    }

    checkLogin()

    return ( 
        <div>
            Profile Page
        </div>
     );
}

export default Profile;