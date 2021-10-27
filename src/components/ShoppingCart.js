import { useHistory } from 'react-router-dom';
import { StyledShoppingCart } from './styled/ShoppingCart.styled';

function ShoppingCart({ shoppingCart }) {
    const history = useHistory()
    // make items appear when added
    // design shoppin Cart page with items in a list
    // figma design
    console.log( 'length')
    console.log(shoppingCart, 'cartItems')

    return (
        <StyledShoppingCart>
            <ul>
                {
                    shoppingCart.map((item, index) => {
                        return <li key={index}>{item.name}</li>
                    })
                }
            </ul>
            <div className='product-bottom'>
                <div>Total: $100</div>
                <button>Checkout</button>
                <button onClick={() => history.push('/')}>Go Back</button>
            </div>
        </StyledShoppingCart>
    )
}

export default ShoppingCart

