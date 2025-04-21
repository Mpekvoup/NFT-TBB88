import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { a } from '../../services/axiosinstance';

function ProductsList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true);
                const res = await a.get('');
                setProducts(res.data);
                setError(null);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Ошибка при загрузке продуктов. Пожалуйста, попробуйте позже.');
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);
    return (
        <div className="nft-grid">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsList;
