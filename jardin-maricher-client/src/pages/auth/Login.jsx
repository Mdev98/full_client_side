import './auth.css';

const Login = () => {
    return (
        <div className="auth">
            
            <form className="auth-form">
                <h2 className="auth-title">Connexion</h2>
                <div className="input-field">
                    <input type="email" placeholder="email" name="email" />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="password" name="password" />
                </div>
                <input type="submit" value="Connexion" className="submitBtn" />
                <div className="more">
                    <span>Mot de passe oublié</span>
                    <span>Ouvrir un compte</span>
                </div>
            </form>
        </div>
    )
}

export default Login
