import { GoogleOAuthProvider } from '@react-oauth/google';

import Header from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="App">
                <Header />
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;
