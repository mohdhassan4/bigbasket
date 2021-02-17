
import React, { useState } from 'react';
import Image from './Image/big.png';
import Image2 from './Image/2.webp';
import './css/navbar.css'
const Navbar = (props) => {
  const [cart, setCart] = useState(0);
console.warn("h",props.data);
  return (<div class="container-fluid" >
    <div class="row" >
      <div class="col-3 offset-1 mt-3" >
        <img id="img1" src={Image} alt="hello"></img>
      </div> <div class="col" >

        <div class="row">
          <div class="col-2 offset-3">
            <p class="mt-3" id="hr"><i class="fas fa-phone-alt"></i> 9501265123   </p>

          </div>
          <div class="col ">
            <p class="mt-3" id="hr"><i class="fas fa-map-marker-alt"></i>    SV Street, C-scheme, Nehru Nagar, Cumbum, Andhra Pradesh  </p>

          </div>

        </div>
        <div class="row">
          <div class="col-6 mt-4">
            <div class="input-group mb-2">

              <input type="text" class="form-control" id="search" placeholder="Search for products" autocomplete="off" ></input>
              <div class="input-group-prepend">
                <p id="ser" class="input-group-text justify-content-center " >Search</p>
              </div>

            </div>
          </div>
          <div class="col  mt-4" >
            <img id="img2" src={Image2} alt="hello"></img>
          </div>
          <div class="col" >
            <div id="bask">
              <div class="row">
                <div class="col-5" >
                  <i class="fas fa-shopping-basket fa-3x ml-3 mt-3"></i>
                </div>
                <div class="col mt-2 ml-n2" id="bsk2" ><p>My Basket</p><p class="mt-n3">{props.data.length} Items</p> </div>

              </div>
            </div>
          </div>




        </div>

      </div>


    </div>
    <div class="container-field"  >
      <div class="row ">
        <div class="col-3 offset-1 " id="contt">
          <div class="dropdown show">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Shop By Category
          </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">Foodgrains, Oil & Masala</a>
              <a class="dropdown-item" href="#">Beverages</a>
              <a class="dropdown-item" href="#">Snacks & Branded Foods</a>
            </div>
          </div>

        </div>
        <div class="col-8 ml-n4 ">
          <div id="offer">
            <i class="fas fa-tag fa-2x mt-2 ml-4"></i> OFFERS
        </div>
        </div>
      </div>


    </div>

  </div>

  );
}

export default Navbar;
