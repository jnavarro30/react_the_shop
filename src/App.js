import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { list } from './list';
// components
import Nav from './components/Nav';
import Home from './components/Home';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
// styles
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styled/Theme';
import { StyledApp } from './components/styled/App.styled';

function App() {
  const [showNav, setShowNav] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  const [products, setProducts] = useState(list)

  const sortProducts = sortBy => {
    switch(sortBy) {
      case 'alphabetically':
        setProducts([...list].sort((a, b) => a.name - b.name))
        break
      case 'price-ascending':
        setProducts([...list].sort((a, b) => a.price - b.price))
        break
      case 'price-descending':
        setProducts([...list].sort((a, b) => b.price - a.price))
        break
      default: setProducts(list)
    }
  }

  const handleClick = e => {
    const classes = e.target.classList
    if (showNav) {
      if (!classes.contains('item') && !classes.contains('subNavBar')) {
        setShowNav(false)
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledApp className="App" onClick={handleClick}>
        <Nav 
          showNav={showNav}
          setShowNav={setShowNav}
          shoppingCart={shoppingCart}
        />
        <main>
          <div className="filters">
            <select onChange={e => sortProducts(e.target.value)}>
              <option value=''>--sort items--</option>
              <option value='alphabetically'>alphabetically</option>
              <option value='price-ascending'>price-ascending</option>
              <option value='price-descending'>price-descending</option>
            </select>
          </div>
          <Switch>
            <Route exact path='/'>
              <Home 
                products={products}
              />
            </Route>
            <Route path='/products/:productId'>
              <Product 
                products={products}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart} 
              />
            </Route>
            <Route path='/shopping-cart'>
              <ShoppingCart 
                shoppingCart={shoppingCart}
              />
            </Route>
            <Route path='/checkout'>
              <Checkout />
            </Route>
          </Switch>
        </main>
      </StyledApp>
    </ThemeProvider>
  );
}


export default App;


