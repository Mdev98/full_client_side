import './auth.css';

const Register = () => {
    return (
        <div className="auth">
            
            <form className="auth-form">
                <h2 className="auth-title">Inscription</h2>
                <div className="input-field">
                    <input type="text" placeholder="username" name="username" />
                </div>
                <div className="input-field">
                    <input type="email" placeholder="email" name="email" />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="password" name="password" />
                </div>
                <div className="input-field">
                    <select className="accountType" name="isSeller">
                        <option >Vous êtes </option>
                        <option value="false">Client</option>
                        <option value="true">Vendeur</option>
                    </select>
                </div>
                <input type="submit" value="Inscription" className="submitBtn" />
            </form>
        </div>
    )
}

export default Register
