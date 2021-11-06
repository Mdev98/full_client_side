import './auth.css';
import { useState } from 'react';
import { login } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch()
    const {isFetching, error} = useSelector(state => state.user)

    function handleClick(e) {
        e.preventDefault();
        login(dispatch, {email, password})
    }

    return (
        <div className="auth">
            
            <form className="auth-form">
                <h2 className="auth-title">{error ? "Identifiant incorrect" : "Connexion"}</h2>
                <div className="input-field">
                    <input type="email" placeholder="email" name="email" onChange={(e) => {setEmail(e.target.value)}} />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="password" name="password" onChange={(e) => {setPassword(e.target.value)}} />
                </div>
                <input type="submit" value="Connexion" className="submitBtn" onClick={handleClick}/>
                <div className="more">
                    <span>Mot de passe oublié</span>
                    <span>Ouvrir un compte</span>
                </div>
            </form>
        </div>
    )
}

export default Login
