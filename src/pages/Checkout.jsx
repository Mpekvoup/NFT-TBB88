import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HOME } from "../utils/consts";
import { a1 } from "../services/axiosinstance";
function Checkout() {
    const { clearCart, totalPrice, cartItems } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    function HandleInputChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    async function HandleSubmit(event) {
        event.preventDefault();
        if (!formData.name || !formData.phone || !formData.address || !formData.city) {
            alert("Пожалуйста, заполните все поля формы.");
            return;
        }
        if (cartItems.length === 0) {
            alert('Ваша корзина пуста. Нельзя оформить пустой заказ!');
            navigate(HOME);
            return;
        }
        setIsSubmitting(true);
        const orderTimeStamp = new Date().toISOString();
        const orderData = {
            customer: formData,
            items: cartItems,
            orderTimeStamp: orderTimeStamp,
        };

        try {
            const res = await a1.post('', orderData);
            alert(`Заказ успешно оформлен! Сумма: ${totalPrice.toLocaleString()} ETH, Номер заказа: ${res.data.id}`);
            clearCart();
            navigate(HOME);
        } catch (error) {
            console.error("Ошибка при отправке заказа:", error.response ? error.response.data : error.message);
            alert(`Что-то пошло не так при оформлении заказа: ${error.response ? error.response.statusText : error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="checkout-container">
            <form className="checkout-form" onSubmit={HandleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Ваше имя</label>
                    <input type="text" id="name" name="name" required placeholder="Введите ваше имя" value={formData.name} onChange={HandleInputChange} disabled={isSubmitting} />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Номер телефона</label>
                    <input type="tel" id="phone" name="phone" required placeholder="+7 (___) ___-__-__" value={formData.phone}  onChange={HandleInputChange} disabled={isSubmitting} pattern="\+7\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}" />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Адрес</label>
                    <input type="text" id="address" name="address" required placeholder="Введите ваш адрес" value={formData.address} onChange={HandleInputChange} disabled={isSubmitting}/>
                </div>

                <div className="form-group">
                    <label htmlFor="city">Город</label>
                    <input type="text" id="city" name="city" required placeholder="Введите ваш город" value={formData.city} onChange={HandleInputChange} disabled={isSubmitting}/>
                </div>

                <div className="order-summary">
                    <h3>Детали заказа</h3>
                    {cartItems.map(item => (
                        <div className="summary-item" key={item.id}>
                            <span>{item.name}</span>
                            <span>{(item.price * item.quantity).toFixed(2)} ETH</span>
                        </div>
                    ))}
                    <div className="summary-total">
                        <span>Итого:</span>
                        <span>{totalPrice.toFixed(2)} ETH</span>
                    </div>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Оформляется..." : "Оформить заказ"}
                </button>
            </form>
        </div>
    );
}

export default Checkout;