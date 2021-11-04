import './category.css';
import CatItem from './catItem/CatItem';

const Category = () => {
    return (
        <div className="category">
            <CatItem 
                img="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Légumes"
                cat="Legumes"
            />
            <CatItem 
                img="https://images.unsplash.com/photo-1617884157905-b66741c4a445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXRzJTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 "
                title="Fruits"
                cat="Fruits"
            />
        </div>
    )
}

export default Category
