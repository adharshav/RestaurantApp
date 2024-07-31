import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = ({cartItems}) => {
  const getCartItemsCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const renderCartIcon = () => (
    <div className="cart-icon-container">
      <AiOutlineShoppingCart size={35} color="#585555" className="cart-icon" />
      <div className="cart-count-badge d-flex justify-content-center align-items-center">
        <p className="cart-count">{getCartItemsCount()}</p>
      </div>
    </div>
  )

  return (
    <div className="nav-header">
      <h1 className="m-0 logo-heading">UNI Resto Cafe</h1>
      <div className="order-container">
        <p className="mt-0 mb-0 d-none d-sm-block my-orders-text">My Orders</p>
        {renderCartIcon()}
      </div>
    </div>
  )
}

export default Header
