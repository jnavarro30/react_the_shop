import { useHistory } from 'react-router-dom';
import { StyledProduct } from './styled/Product.styled';

function ShoppingCart({ shoppingCart }) {
    const history = useHistory()
    console.log(shoppingCart)

    return (
        <StyledProduct>
            {/* <div className="container">
                <div className="product-top">
                    <div>{name}</div>
                    <div>${price}</div>
                </div>
                <figure>
                    <img src={image} alt={name} />
                </figure>
                <p>{description}</p>
                <div className='product-quantity'>
                    <div>Qty</div>
                    <div>
                        <i className="bi bi-dash-lg" onClick={() => handleAddSubtract('-')}></i>  
                        <span>{quantity}</span>
                        <i className="bi bi-plus-lg" onClick={() => handleAddSubtract('+')}></i>
                    </div>
                </div>
                <div className='product-bottom'>
                    <div>Total: ${total}</div>
                    <button onClick={handleAddToCart}>Add to cart</button>
                    <button onClick={() => history.push('/')}>Go Back</button>
                </div>
            </div> */}
            Hi
        </StyledProduct>
    )
}

export default ShoppingCart
