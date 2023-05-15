import {emaptyWishList} from '../../assets'
export const WishList=()=>{
    return<>
    
    <div className="cart-case">
        <h1>Products In My Wish List Is (0)</h1>
        <img
          className="emapty-cart-img"
          src={emaptyWishList}
          alt="emapty cart message"
        />
      </div>
    </>
}