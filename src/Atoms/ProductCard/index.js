import "./index.css"

const ProductCard = ({image,title,price})=>{
    return(
        <div>
            <img id="image" src={image} alt=""/>
            <h4>{title}</h4>
            <p>Price: ${price}</p>
        </div>
    );
};

export default ProductCard;