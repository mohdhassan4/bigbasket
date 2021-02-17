import React, { useState } from 'react';
import './css/bank.css';
function Map () {
      const [cart , setCart] = useState([]);
      const [bank] = useState(
          [
                {
                      image : 'https://www.bigbasket.com/media/customPage/355c27b8-a44f-4900-a390-8e82c69b8021/b12be8ff-7c76-45da-baef-123bc860e05e/5ea84432-4ecd-4447-ad72-69b0cd43537a/T1_All_RBL_DT_1_480x360_11thNov.jpg'
                },
                {
                      image : 'https://www.bigbasket.com/media/customPage/355c27b8-a44f-4900-a390-8e82c69b8021/b12be8ff-7c76-45da-baef-123bc860e05e/5ea84432-4ecd-4447-ad72-69b0cd43537a/T1_All_RBL_DT_1_480x360_11thNov.jpg'
                },
                {
                      image : 'https://www.bigbasket.com/media/customPage/355c27b8-a44f-4900-a390-8e82c69b8021/b12be8ff-7c76-45da-baef-123bc860e05e/5ea84432-4ecd-4447-ad72-69b0cd43537a/T1_All_RBL_DT_1_480x360_11thNov.jpg'
                },
                {
                      image : 'https://www.bigbasket.com/media/customPage/355c27b8-a44f-4900-a390-8e82c69b8021/b12be8ff-7c76-45da-baef-123bc860e05e/5ea84432-4ecd-4447-ad72-69b0cd43537a/T1_All_RBL_DT_1_480x360_11thNov.jpg'
                  },
          ]
      );
     const addToCart = (bank) =>{
           console.log("item added");
           setCart([...cart, bank]); 
     }
     let cartvalue = cart.length;
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
<h1>{cartvalue}</h1>
{bank.map((Bank)=>
(
      
      <div class="col-3"><img id="bank" src={Bank.image} alt=""></img>
      <button type="button" onClick = {() => addToCart(bank)}> Add to cart</button>
                        </div>
                        

)
)}

</div>
</div>
      </div>
</div>

          );
      }

      export default Map;
