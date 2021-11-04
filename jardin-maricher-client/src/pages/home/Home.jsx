// import Annoucements from '../../components/annoucements/Annoucements';
import Category from '../../components/categories/Category';
import Navbar from '../../components/navbar/Navbar';
import Newsletter from '../../components/newsletter/Newsletter';
import Products from '../../components/products/Products';
import Slider from '../../components/slider/Slider';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Slider />
            <Category />
            <Products />
            <Newsletter />
        </div>
    )
}

export default Home
