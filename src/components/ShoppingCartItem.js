import { useState } from 'react';
// styles 
import { StyledShoppingCartItem } from './styled/ShoppingCartItem.styled';

function ShoppingCartItem({ item, shoppingCart }) {
    const [itemQuantity, setItemQuantity] = useState(0)
    const { image, name, quantity, price } = item
    const handleAddSubtract = operator => {
        console.log('working')
        if (operator === '+') setItemQuantity(quantity + 1)
        else {
            if (!itemQuantity) return
            setItemQuantity(itemQuantity - 1)
        }
    }

    return (
        <StyledShoppingCartItem>
            <div className='item-left'>
                <figure>
                    <img src={image} alt={name} />
                </figure>
            </div>
            <div className='item-right'>
                <div>{name}</div>
                <div>Price ${price}</div>
                <div>
                    <i className="bi bi-dash-lg" onClick={() => handleAddSubtract('-')}></i>  
                    <span>{quantity}</span>
                    <i className="bi bi-plus-lg" onClick={() => handleAddSubtract('+')}></i>
                </div>
                <div>Subtotal ${quantity * price}</div>
            </div>
        </StyledShoppingCartItem>
    )
}

export default ShoppingCartItem
