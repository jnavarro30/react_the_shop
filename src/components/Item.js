import { Link } from 'react-router-dom';
// styles
import { StyledItem, StyledInfo } from './styled/Item.styled';

function Item({ product }) {
    const { id, image, name, price} = product

    return (
        <StyledItem className='Item'>
            <Link to={`/${id}`}>
                <img src={image} alt={name} />
            </Link>
            <StyledInfo>
                <div className='info name'>{name}</div>
                <div className='info price'>${price}</div>
            </StyledInfo>
        </StyledItem>
    )
}

export default Item
