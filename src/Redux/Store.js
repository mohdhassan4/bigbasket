
import { createStore, applyMiddleware } from 'redux'; 
//import Reducer from './Reducer';
const initial ={
    count: 0
};
const Reducer = (previousState = initial, action)=>{
    return previousState;
    
    }
    //const store = createStore(() => [], {}, applyMiddleware());   
    const Store = createStore(Reducer);

export default { 
    Store };
