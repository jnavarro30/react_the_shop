import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledShoppingCart } from './styled/ShoppingCart.styled';
// components
import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCart({ shoppingCart }) {
    const history = useHistory()
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(
            shoppingCart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        )
    }, [shoppingCart])
   
    return (
        <StyledShoppingCart>
            <div className='cart-list'>
                {
                    shoppingCart.map((item, index) => (
                        <ShoppingCartItem 
                            key={index}
                            item={item}
                            shoppingCart={shoppingCart}
                        />
                    ))
                }
            </div>
            <div className='product-bottom'>
                <div>Total: ${total}</div>
                <button>Checkout</button>
                <button onClick={() => history.push('/')}>Go Back</button>
            </div>
        </StyledShoppingCart>
    )
}

export default ShoppingCart

