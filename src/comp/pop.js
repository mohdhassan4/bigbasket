import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Yes from './Image/m1.webp';
import Ind from './Image/m4.webp';
import Id from './Image/m2.webp';
import Fb from './Image/m3.webp';
import Yes1 from './Image/mm1.webp';
import Ind1 from './Image/mm4.webp';
import Id1 from './Image/mm2.webp';
import Fb1 from './Image/mm3.webp';
import './css/bank.css';
class Pop extends Component {
      state ={
          Daily : [
              {Img : Fb1},
              {Img : Id1},
              {Img : Ind1},
              {Img : Yes1},
          ],
          Most: [
            {Img : Fb},
            {Img : Id},
            {Img : Ind},
            {Img : Yes},
          ]
      };
      render(){
        const newDaily = this.state.Daily.map( daily => {
            return(
                  <div class="col-3" id="cont"><img id="bank" src={daily.Img}alt="hello"></img>
                        <div class="overlay"></div>
                         <div class="button">
                              <a class="mr-2" href="#"> cart </a>
                             <Link to="/cart">
                               Buy </Link>
                        </div>

                  </div>
              
            );
        });
        const newMost = this.state.Most.map( most => {
            return(
                  <div class="col-3" id="cont"><img id="bank" src={most.Img}alt="hello"></img>
                        <div class="overlay"></div>
                        <div class="button">
                              <a class="mr-2" href="#"> cart </a><Link to="/cart">
                               Buy </Link>
                        </div>

                  </div>
              
            );
        });
            return (
                  <div class = "container-fluid mt-3"  >
                        <div class="row">
                              <div class="col-10 offset-1 mt-3 mb-4 bank_tit text-center">
                                    Most Popular
                                    <hr>
                                    </hr>
                              </div>
                              <div class="col-10 offset-1 mt-3 mb-4 bank_tit">
                                    <div class="row">
                                    {newMost}
                              </div>


                        </div>
                   </div>

                  <div class="row">
                        <div class="col-10 offset-1 mt-3 mb-4 bank_tit text-center">
                              Your Daily Staples
                              <hr>
                              </hr>
                        </div>
                        <div class="col-10 offset-1 mt-3 mb-4 bank_tit">
                              <div class="row">
                                    {newDaily}
                              </div>
                        </div>
                  </div>
            </div>

            );   
      }
}
export default Pop;
