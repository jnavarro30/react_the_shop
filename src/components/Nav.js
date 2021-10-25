import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// styles
import { StyledNav, StyledNavBar, StyledSubNavBar } from '../components/styled/Nav.styled'


function Nav({ showNav, setShowNav, shoppingCart }) {
    const history = useHistory()
    const [totalCartItems, setTotalCartItems] = useState(0)

    useEffect(() => {
        const ItemsInCart = () => {
            let total = shoppingCart.reduce((acc, item) => {
                if (item.quantity) acc += item.quantity
                return acc
            }, 0)
            if (total) setTotalCartItems(total)
        }
        ItemsInCart()
    }, [shoppingCart])

    return (
        <StyledNav>
            <StyledNavBar>
                <i className="bi bi-list" onClick={() => setShowNav(!showNav)}></i>
                <Link to='/'>
                    <h1>The Shop</h1>
                </Link>
                <div className='shopping-cart'>
                    <i className="bi bi-cart" onClick={() => history.push('/shopping-cart')}>
                        {totalCartItems ? totalCartItems : ''}
                    </i>
                </div>
            </StyledNavBar>
            <StyledSubNavBar className='subNavBar' style={{display: showNav ? 'grid' : 'none'}}>
                <div className="item">Product a</div>
                <div className="item">Product b</div>
                <div className="item">Product c</div>
            </StyledSubNavBar>
        </StyledNav>
    )
}

export default Nav

// click anywhere but nav to make nav close
