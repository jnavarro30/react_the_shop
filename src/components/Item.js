import { useHistory } from 'react-router-dom';
// styles
import { StyledItem } from './styled/Item.styled';

function Item({ product }) {
    const history = useHistory()
    const { id, image, name } = product

    return (
        <StyledItem className='Item' onClick={() => history.push(`/${id}`)}>
            <figure>
                <img src={image} alt={name} />
            </figure>
            <p>{name}</p>
        </StyledItem>
    )
}

export default Item
