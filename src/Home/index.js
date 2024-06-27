import bts from "./bts.jpg"
import btshood from "./btshood.jpg"
import btsshoes from "./btsshoes.jpg"
import "./index.css"
import { FaRegHeart } from "react-icons/fa6";
import { BsBag } from "react-icons/bs";

const Homepage=()=>{
    return(
        <>
        <ul id="navlist">
            <li>Home</li>
            <li>Shop</li>
            <li>Categories</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <input placeholder="Search" type="text"/>
            <FaRegHeart/>
            <BsBag/>
        </ul>
        <div id="home">
            <div id="bbag">
                <img id="bag" src={bts} alt="BTS Bag"/>
            </div>
            <div>
                <h1>Find The Best</h1>
                <h2>Fashion Style</h2>
                <h3>For You</h3>
                <p id="paragraph">"Discover Sustainability. Embrace Ecothread.</p>
                <p>Your Eco-Friendly Haven for Conscious</p>
                <p>Shopping</p>
                <button>SHOP NOW</button>
            </div>
            <div>
                <img id="hood" src={btshood} alt="Hoods"/><br></br>
                <img id="shoes" src={btsshoes} alt="Shoes"/>
            </div>
        </div>
        </>
    )
}
export default Homepage;