import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledShoppingCart } from './styled/ShoppingCart.styled';
// components
import ShoppingCartItem from './ShoppingCartItem';
// styles
import { StyledButton } from './styled/Button.styled';

function ShoppingCart({ shoppingCart, setShoppingCart }) {
    const history = useHistory()
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        setTotalPrice(
            shoppingCart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        )
        setTotalItems(
            shoppingCart.reduce((acc, item) => acc + item.quantity, 0)
        )
    }, [shoppingCart])

    const handleCheckout = () => {
        if (shoppingCart.length <= 0) return
        history.push('/checkout')
    }
   
    return (
        <StyledShoppingCart>
            <div className='cart-list'>
                {
                    shoppingCart.map((item, index) => (
                        <ShoppingCartItem 
                            key={index}
                            item={item}
                            shoppingCart={shoppingCart}
                            setShoppingCart={setShoppingCart}
                            total={totalPrice}
                            setTotal={setTotalPrice}
                        />
                    ))
                }
            </div>
            <div className='product-bottom'>
                <div>Items: {totalItems}</div>
                <div>Total: ${totalPrice}</div>
                <StyledButton onClick={handleCheckout}>Checkout</StyledButton>
                <StyledButton onClick={() => history.push('/')}>Go Back</StyledButton>
            </div>
        </StyledShoppingCart>
    )
}

export default ShoppingCart

