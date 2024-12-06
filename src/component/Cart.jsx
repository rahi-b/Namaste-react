import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItem";
import { clearItem } from "../utils/cartSlice";

const Cart = () =>{

    const cartItems =useSelector((store)=>store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart =()=>{
        dispatch(clearItem())
    }

    return(
        <div className="text-center p-4 m-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="bg-black text-white px-4 my-3 rounded-lg"
            onClick={handleClearCart}>
                Clear
            </button>
                 {cartItems.length === 0 && <h1>Cart is empty .Add Items please!</h1>}
                  <CategoryItems items={cartItems}/>
                </div>
            </div>
           
            
        
    )
}

export default Cart;