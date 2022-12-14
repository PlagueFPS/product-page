import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { CartItem } from './CartItem'
import { AiOutlineLeft } from 'react-icons/ai'

export const Cart = () => {
  const { cartItems, setShowCart, totalAmount, totalPrice } = useContext(CartContext)!

  return (
    <div className='cartContainer'>
      <div className="cartContent">
        <button className="cartHeading" onClick={ () => setShowCart(false) }>
          <AiOutlineLeft />
          <span className='cartTitle'>Your Cart</span>
          <span className="cartTotalItems">({ totalAmount } items)</span>
        </button>
        <ul className="cartItemList">
          { !cartItems.length && <div className='cartEmpty'>Your cart is empty</div> }
          { cartItems.map(item => <CartItem key={ item._id } cartItem={ item } />) }
        </ul>
        <span className='subTotal'>Sub Total: ${ totalPrice }.00</span>
        <button className='checkout'>Checkout</button>
      </div>
    </div>
  )
}
