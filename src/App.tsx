import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { CartItem } from './pages/cart/components/cartitem/cartitem';
import { ProductItem } from './pages/productListing/components/product/productitem';
import { ProductList } from './pages/productListing';
import { Cart } from './pages/cart';
import { RouteHandler } from './setup/RouterHandler';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouteHandler/>
      </header>
    </div>
  );
}

export default App;
