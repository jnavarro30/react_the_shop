import { useState, useEffect } from 'react';
// styles 
import { StyledShoppingCartItem } from './styled/ShoppingCartItem.styled';

function ShoppingCartItem({ item, shoppingCart, setShoppingCart }) {
    const { image, name, quantity, price, id } = item
    const [itemQuantity, setItemQuantity] = useState(quantity)

    const handleAddSubtract = operator => {
        if (operator === '+') setItemQuantity(prevQuantity => prevQuantity + 1)
        else setItemQuantity(prevQuantity => prevQuantity - 1)
    }

    useEffect(() => {
        const updateQuantity = () => {
            let updateCart = shoppingCart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: itemQuantity
                    }
                }
                return item
            })
            setShoppingCart([...updateCart])
        }
        updateQuantity()
    }, [itemQuantity])

    const handleDelete = () => {
        let updateCart = shoppingCart.filter(item => item.id !== id)
        setShoppingCart([...updateCart])
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
                    <span>{itemQuantity}</span>
                    <i className="bi bi-plus-lg" onClick={() => handleAddSubtract('+')}></i>
                </div>
                <div>Subtotal ${itemQuantity * price}</div>
                <button onClick={handleDelete}>delete</button>
            </div>
        </StyledShoppingCartItem>
    )
}

export default ShoppingCartItem

