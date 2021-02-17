import React, {Component} from 'react';
import Yes from './Image/yes.webp';
import Ind from './Image/ind.webp';
import Id from './Image/id.webp';
import Fb from './Image/fd.webp';
import './css/bank.css';
import Cart from './Cart';
class Bank extends Component {
     
      state ={
          Most: [
            {Img : Fb},
            {Img : Id},
            {Img : Ind},
            {Img : Yes},
          ]
      };
      render(){
            const newMost = this.state.Most.map( most => {
                  return(
                        <div class="col-3"><img id="bank" src={most.Img} alt="hello"></img>
                        </div> 
                  );
                  
              });
    return (
      <div class = "container-fluid mt-3"  >

<div class="row">
<div class="col-10 offset-1 mt-3 mb-4 bank_tit text-center">
Bank Offers
<hr>
</hr>
</div>
<div class="col-10 offset-1 mt-3 mb-4 bank_tit">
<div class="row">
{newMost}

</div>



</div>
      </div>
</div>

          );
      }
}
      export default Bank;
