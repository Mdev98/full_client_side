import Slide from './Slide';
import './wrapper.css';

const Wrapper = () => {
    return (
        <div className="slider-wrapper">
            <Slide image="https://media.istockphoto.com/photos/fresh-fruits-and-vegetables-frame-on-white-background-copy-space-picture-id1288664808?b=1&k=20&m=1288664808&s=170667a&w=0&h=Ueb9uaojbZzO-CQwjbkUKrO93Lu4ZeflotWga3Wrq9w=" info="Produits frais et de qualité" pos="right" />
            <Slide image="https://media.istockphoto.com/photos/beans-variation-shot-from-above-on-white-background-with-copy-space-picture-id1293023659?b=1&k=20&m=1293023659&s=170667a&w=0&h=6qdvb7mFSqdwY_0ORBvs0d4d2lk14P5xD2p6AXK6Ecg=" info="Made in Sénégal par nos meilleurs agriculteurs" pos="left" />
            <p className="info">Produits frais et de qualité<br/>Made in Sénégal par nos meilleurs agriculteurs</p>
        </div>
    )
}

export default Wrapper


