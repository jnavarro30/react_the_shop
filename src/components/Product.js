import { useParams } from 'react-router-dom';
//styles
import { StyledProduct, StyledInfo } from './styled/Product.styled';

function Product({ products }) {
    const { productId } = useParams()
    console.log(typeof productId)
    const product = products.find(product => {
        return product.id === Number(productId);
    })
    const { name, price, description, image } = product
    console.log(product)
    return (
        <StyledProduct>
            <img src={image} alt={name} />
            <StyledInfo>
                <div className='info-top'>
                    <div className='info name'>{name}</div>
                    <div className='info price'>${price}</div>
                </div>
                <div className='info-bottom'>
                    <div>Qty: 1</div>
                    <div>Total: 100</div> 
                </div>
            </StyledInfo>
            <div className='product-btns'>
                <button className='plus'><i className="bi bi-plus-lg"></i></button>
                <button className='dash'><i className="bi bi-dash-lg"></i></button>
                <button className="add">Add to Cart</button>
            </div>
        </StyledProduct>
    )
}

export default Product
