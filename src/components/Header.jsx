import { Link } from "react-router-dom";
import { HOME, CART, CHECKOUT } from "../utils/consts";

function Header() {
    return (
        <header>
            <h1 className="welcome-text">NFT Store</h1>
            <nav className="nav-links">
                <Link to={HOME} className="nav-link">Магазин</Link>
                <Link to={CART} className="nav-link cart-link">
                    <span className="cart-icon">🛒</span>
                    Корзина
                </Link>
                <Link to={CHECKOUT} className="nav-link">Оформление заказа</Link>
            </nav>
        </header>
    );
}

export default Header;
