import React from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import Slider from './comp/slider';
import Slider2 from './comp/slider2';
import Bank from './comp/bank';
import Pop from './comp/pop';
import Snacks from './comp/snacks';
import Beauty from './comp/beauty';
const Home =()=>{
      return(
      <>
        
        <Slider />
        <Slider2 />
        <Bank />
        <Pop />
        <Snacks />
       <HomeContainer/>

      </>


)
}

export default Home;
