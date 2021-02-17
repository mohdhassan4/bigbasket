import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './comp/Cart';

import Error from './comp/Error'

import HeaderContainer from './containers/HeaderContainer'




const App =() =>{
  /*const [count, setCount] = useState(50);
  const Inc = () =>{
      setCount(count + 1);
  };*/
      return (
        <>
        
        <HeaderContainer />
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Error} />
        </Switch>
        </BrowserRouter>
        
       
  
      
     
        </>
  
  
      );
  }

  export default App;
  
