import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// func
import { SetShowNavContext } from '../App';
// styles
import { StyledItem } from './styled/Item.styled';

function Item({ product }) {
    const history = useHistory()
    const setShowNav = useContext(SetShowNavContext)
    const { id, image, name } = product
    const handleClick = () => {
        setShowNav(false)
        history.push(`/${id}`)
    }

    return (
        <StyledItem className='Item' onClick={handleClick}>
            <figure>
                <img src={image} alt={name} />
            </figure>
            <p>{name}</p>
          </StyledItem>
    )
}

export default Item
