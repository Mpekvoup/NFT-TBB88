import { useCart } from '../../context/CartContext';

function ProductItem({ product }) {
    const { addToCart } = useCart();
    function handleAddToCart() {
        addToCart(product);
    }

    return (
        <div className="nft-card">
            <img src={product.image} alt={product.name} className="nft-image" />
            <div className="nft-info">
                <h3 className="nft-name">{product.name}</h3>
                <p className="nft-price">{product.price.toLocaleString()} ETH</p>
                <button className="add-to-cart" onClick={handleAddToCart}>В корзину</button>
            </div>
        </div>
    );
}

export default ProductItem;
