import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Nav from './components/Nav';
import Home from './components/Home';
import Product from './components/Product';
import Checkout from './components/Checkout';
// styles
import { StyledApp } from './components/styled/App.styled';


function App() {
  const [products, setProducts] = useState([
    {
      id: 0,
      image: 'https://images.unsplash.com/photo-1500420254515-0faefa2dac99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80',
      name: 'Basil',
      description: 'Basil is an herb in the mint family. It adds flavor to meals, and its nutrients may provide health benefits.',
      price: 10
    },
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1535189487909-a262ad10c165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
      name: 'Cilantro',
      description: 'People use cilantro as a flavorsome addition to soups, salads, curries, and other dishes. In some parts of the world, people call it coriander.',
      price: 8
    },
    {
      id: 2,
      image: `https://images.unsplash.com/photo-1602769515559-e15133a7e992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1009&q=80`,
      name: 'Green Onions',
      description: '',
      price: 12
    }
  ])

  return (
    <Router>
      <StyledApp className="App">
        <Nav />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home products={products} />
            </Route>
            <Route path='/:productId'>
              <Product products={products} />
            </Route>
            <Route path='/checkout'>
              <Checkout />
            </Route>
          </Switch>
        </main>
      </StyledApp>
    </Router>
  );
}


export default App;


