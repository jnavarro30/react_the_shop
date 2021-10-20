import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showNav } from '../actions/showNav';
// styles
import { StyledNav, StyledNavBar, StyledSubNavBar } from '../components/styled/Nav.styled'


function Nav() {
    const dispatch = useDispatch()
    const displayNav = useSelector(state => state.showNav)
    
    const handleList = () => {
        dispatch(showNav())
    }

    const handleCart = () => {
        // take to checkout page
        console.log('welcome to checkout page')
    }

    return (
        <StyledNav>
            <StyledNavBar>
                <i className="bi bi-list" onClick={handleList}></i>
                <Link to='/'>
                    <h1>The Shop</h1>
                </Link>
                <div className='shopping-cart'>
                    <i className="bi bi-cart" onClick={handleCart}></i>
                </div>
            </StyledNavBar>
            <StyledSubNavBar style={{display: displayNav ? 'grid' : 'none'}}>
                <div className="item">Product a</div>
                <div className="item">Product b</div>
                <div className="item">Product c</div>
            </StyledSubNavBar>
        </StyledNav>
    )
}

export default Nav
