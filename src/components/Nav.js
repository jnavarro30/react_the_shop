import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// styles
import { StyledNav, StyledNavBar, StyledSubNavBar } from '../components/styled/Nav.styled'


function Nav({ showNav, setShowNav, shoppingCart }) {
    const history = useHistory()
    const [totalCartItems, setTotalCartItems] = useState(0)

    useEffect(() => {
        const ItemsInCart = () => {
            let totalItems = shoppingCart.reduce((acc, item) => {
                acc += item.quantity
                return acc
            }, 0)
            setTotalCartItems(totalItems)
        }
        ItemsInCart()
    }, [shoppingCart])

    return (
        <StyledNav>
            <StyledNavBar>
                <i className="bi bi-list" onClick={() => setShowNav(!showNav)}></i>
                <h1>The Shop</h1>
                <div className='shopping-cart'>
                    <i className="bi bi-cart" onClick={() => history.push('/shopping-cart')}>
                        {totalCartItems ? totalCartItems : ''}
                    </i>
                </div>
            </StyledNavBar>
            <StyledSubNavBar className='subNavBar' style={{display: showNav ? 'grid' : 'none'}}>
                <Link to='/'>
                    <div className="item">Home</div>
                </Link>
                <Link to='/about'>
                    <div className="item">About</div>
                </Link>
                <Link to='/contact'>
                    <div className="item">Contact</div>
                </Link>
            </StyledSubNavBar>
        </StyledNav>
    )
}

export default Nav
