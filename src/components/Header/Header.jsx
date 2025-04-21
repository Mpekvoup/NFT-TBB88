import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">NFT Marketplace</Link>
            </div>
            <nav className="nav">
                <Link to="/">Главная</Link>
                <Link to="/cart">Корзина</Link>
            </nav>
        </header>
    );
}

export default Header; 