import { Link, useNavigate } from "react-router-dom";
import { HOME, CHECKOUT } from "../utils/consts";
import { useCart } from "../context/CartContext";

function Cart() {
    const {
        cartItems,
        removeFromCart,
        increaceQuantity,
        decreaceQuantity,
        totalPrice,
    } = useCart();
    const navigate = useNavigate();

    function handleCheckOut() {
        if (cartItems.length === 0) {
            alert("Ваша корзина пуста!");
            return;
        }
        navigate(CHECKOUT);
    }

    if (cartItems.length === 0) {
        return (
            <section className="cart-section">
                <div className="container">
                    <h1 className="cart-title">Корзина</h1>
                    <div className="cart-actions">
                        <Link to={HOME} className="continue-btn">Продолжить покупки</Link>
                        <h2 className="Alert">Ваша корзина пуста!</h2>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="cart-section">
            <div className="container">
                <h1 className="cart-title">Корзина</h1>
                <div className="cart-container">
                    <div className="cart-table">
                        <div className="cart-header">
                            <div className="cart-header-item">NFT</div>
                            <div className="cart-header-item">Название</div>
                            <div className="cart-header-item">Цена</div>
                            <div className="cart-header-item">Количество</div>
                            <div className="cart-header-item">Итого</div>
                            <div className="cart-header-item">Действия</div>
                        </div>
                        {cartItems.map(item => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-cell">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                </div>
                                <div className="cart-item-cell">
                                    <h3 className="cart-item-name">{item.name}</h3>
                                </div>
                                <div className="cart-item-cell">
                                    <span className="cart-item-price">{item.price} </span>
                                </div>
                                <div className="cart-item-cell">
                                    <div className="quantity-selector">
                                        <button className="quantity-btn minus" onClick={() => decreaceQuantity(item.id)} disabled={item.quantity <= 1} >-</button>
                                        <input type="number" value={item.quantity} min="1" className="quantity-input" readOnly />
                                        <button className="quantity-btn plus" onClick={() => increaceQuantity(item.id)}>+</button>
                                    </div>
                                </div>
                                <div className="cart-item-cell">
                                    <span className="cart-item-total">
                                        {(item.price * item.quantity).toFixed(2)} ETH
                                    </span>
                                </div>
                                <div className="cart-item-cell">
                                    <button className="delete-btn" onClick={() => removeFromCart(item.id)}>Удалить</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <div className="total-price">
                            <span className="total-label">Общая сумма:</span>
                            <span className="total-amount">{totalPrice.toFixed(2)} ETH</span>
                        </div>
                        <div className="cart-actions">
                            <button onClick={handleCheckOut} className="checkout-btn">Оформить заказ</button>
                            <Link to={HOME} className="continue-btn">Продолжить покупки</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;