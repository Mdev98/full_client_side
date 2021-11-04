import './wrapper.css';

const Slide = (props) => {
    return (
        <div className="slide">
            <img className="image" src={props.image} alt="slider"/>
            {/* <p className="info" style={props.pos === "left" ? {left : "50px"} : {right : "50px"} }>{props.info}</p> */}
        </div>
    )
}

export default Slide
