import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Yes from './Image/b1.webp';
import Ind from './Image/b2.webp';
import Id from './Image/b3.webp';
import Fb from './Image/b4.webp';
import T5 from './Image/b5.webp';


import './css/bank.css';
class Beauty  extends Component {
      state ={
          Most: [
            {Img : Fb},
            {Img : Id},
            {Img : Ind},
            {Img : T5},
          ]
      };
      render(){
            const newMost = this.state.Most.map( most => {
                  return(
                        <div class="col-6 mb-3" id="cont"><img id="bank" src={most.Img}alt="hello"></img>
                              <div class="overlay"></div>
                              <div class="button">
                                    <a class="mr-2" href="#"  onClick={
                        ()=>{this.props.addToCartHandler({pice:1000,name:'beauty'})}
                        }> cart </a><Link to="/cart">
                               Buy </Link>
                              </div>
      
                        </div>
                    
                  );
              });
    return (
      <div class = "container-fluid mt-3"  >
            <div class="row">
                  <div class="col-10 offset-1 mt-3 mb-4 bank_tit text-center">
                  Beauty and Hygiene
                  <hr>
                  </hr>
            </div>
            <div class="col-10 offset-1 mt-3 mb-4 bank_tit">
                  <div class="row">

                        <div class="col-6 ">
                              <div class="row">
                                    
                               </div>
                         </div>
                        <div class="col-6" id="cont"><img id="bank" src={Yes} alt="hello"></img>
                               <div class="overlay1"></div>
                               <div class="button"><a class="mr-2" href="#"> cart </a><Link to="/cart">
                               Buy </Link></div>
                        </div>
                  </div>

            </div>
      </div>


</div>

          );
      }
}
      export default Beauty;
