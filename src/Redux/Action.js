import Store from './Store';
function Addtocart() {
    const action ={
        type :"Add_Tp_Cart",

    }
    Store.dispatch(action); 
}
export default { Addtocart };
