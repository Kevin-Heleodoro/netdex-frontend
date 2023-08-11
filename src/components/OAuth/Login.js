import { Button } from 'react-bootstrap';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const style = {
    padding: '10px',
    color: 'black',
    cursor: 'move',
};

function Login({ setUser }) {
    const onSuccess = (res) => {
        var tokenData = jwt_decode(res.credential);
        var loginData = {
            googleId: tokenData.sub,
            ...tokenData,
        };

        setUser(loginData);
        localStorage.setItem('login', JSON.stringify(loginData));
        console.log(`Login success! \ncurrentUser: `, loginData);
    };

    const onFailure = (res) => {
        console.log(`Login failed. \nres: `, res);
    };

    return (
        <div>
            <GoogleLogin
                id="login"
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                render={(renderProps) => (
                    <Button onClick={renderProps.onClick} style={style}>
                        Login
                    </Button>
                )}
                isSignedIn={true}
                auto_select={true}
            />
        </div>
    );
}

export default Login;
