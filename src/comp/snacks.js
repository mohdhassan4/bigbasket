import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Yes from './Image/t1.webp';
import Ind from './Image/t4.webp';
import Id from './Image/t2.webp';
import Fb from './Image/t3.webp';
import T5 from './Image/t5.webp';
import './css/bank.css';
class Snacks extends Component {
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
T20 Snack Store- up to 40% off
<hr>
</hr>
</div>
<div class="col-10 offset-1 mt-3 mb-4 bank_tit">
<div class="row">
<div class="col-6" id="cont" ><img id="bank" src={Yes} alt="hello"></img>
<div class="overlay1"></div>
  <div class="button"><a class="mr-2" href="#"> cart </a><Link to="/cart">
                               Buy </Link></div>
</div>
<div class="col-6 ">
<div class="row">
{newMost}
</div>


</div>
</div>

</div>
      </div>


</div>
  );   
}
}

      export default Snacks;
