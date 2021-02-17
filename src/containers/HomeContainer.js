import Beauty from '../comp/beauty'
import {connect} from 'react-redux'
import {addToCart} from '../service/actions/actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Beauty)
// export default Home;