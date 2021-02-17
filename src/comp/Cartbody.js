import React, { Component } from 'react';
import Img from './Image/se.webp'
import './css/cart.css';
function Body(props) {

    return (
        <>
            <div class="container mt-3">
                <div class="row">
                    <div class="col-md-6">
                        <img src={Img} width="100%" />
                    </div>
                    <div class="col-md-6 mt-3">
                        <h5>san</h5>
                        <p id="par">MRP:
   <s>Rs 325</s>
                            <b>Price:
    Rs 255</b>
    You Save:
    22%
    (Inclusive of all taxes)
    </p>
                        <div class="row">
                            <div class="col-1 mr-2">
                                <input id="input" type="number" value="1" />
                            </div>
                            <div class="col-3 mr-3">
                                <button id="butt" type="button">Buy</button>
                            </div>
                            <div class="col-5">
                                <button id="butt1" type="button">Save</button>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col">
                                <i class="fas fa-truck"></i><span class="del ml-2"> Standard: Sunday Morning</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;