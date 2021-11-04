import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { list } from './list';
// components
import Nav from './components/Nav';
import Home from './components/Home';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';
// styles
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styled/Theme';
import { StyledApp } from './components/styled/App.styled';

function App() {
  const [showNav, setShowNav] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  const [products, setProducts] = useState(list)

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
          <Switch>
            <Route exact path='/'>
              <Home 
                products={products}
                setProducts={setProducts}
              />
            </Route>
            <Route path='/about'>
              <About />
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
                setShoppingCart={setShoppingCart}
              />
            </Route>
            <Route path='/checkout'>
              <Checkout 
                shoppingCart={shoppingCart}
              />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </main>
      </StyledApp>
    </ThemeProvider>
  );
}


export default App;


