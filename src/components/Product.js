import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
//styles
import { StyledProduct } from './styled/Product.styled';

function Product({ products, shoppingCart, setShoppingCart }) {
    const { productId } = useParams()
    const history = useHistory()
    const [product, setProduct] = useState(products.find(product => product.id === Number(productId)))
    const [quantity, setQuantity] = useState(1)
    const {id, name, price, description, image } = product
    const [total, setTotal] = useState(price)

    const handleAddSubtract = operator => {
        if (operator === '+') setQuantity(prevQuantity => prevQuantity + 1)
        else {
            if (!quantity) return
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    const handleAddToCart = () => {
        let item = shoppingCart.find(elem => elem.id === Number(productId))
  
        if (item) {
            if (item.quantity === quantity) {
                console.log('already added')
                return
            }

            let updateCart = shoppingCart.map(elem => {
                if (elem.id === Number(productId)) {
                    return {
                        ...elem,
                        quantity
                    }
                }
                return elem
            })
            setShoppingCart([
                ...updateCart
            ])
        } else {
            setShoppingCart([
                ...shoppingCart,
                {
                    ...product,
                    quantity
                }
            ])
        }
    }

    useEffect(() => {
        setProduct(products.find(product => product.id === Number(productId)))
        setTotal(quantity * price)
    }, [quantity, productId, price, products])

    return (
        <StyledProduct>
            <div className="container">
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
            </div>
        </StyledProduct>
    )
}

export default Product
