import { Send } from '@mui/icons-material'
import './newsletter.css'

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h2 className="title">Newsletter</h2>
            <div className="description">
                <span>Recevez des notifications sur vos produits favoris</span>
            </div>
            <div className="formulaire">
                <input type="text" name="mail" placeholder="Your email" />
                <button><Send /></button>
            </div>
        </div>
    )
}

export default Newsletter
