import { Link } from 'react-router-dom';
import CardImg from '../assets/image/nft.png'
import CardImg1 from '../assets/image/nft1.png'
import CardImg2 from '../assets/image/nft3.png'
import CardImg3 from '../assets/image/nft4.png'
import ProductsList from '../components/Products/ProductsList';

function Home() {
    return (
        <div>
            <section className="nft-section">
                <h2>Последние продажи</h2>
                <div className="sales-row">
                    <div className="sale-item">
                        <img src={CardImg} alt="Digital Art" />
                        <div className="sale-info">
                            <h3>Цифровое Искусство #1</h3>
                            <p className="sale-price">Продано за: 0.5 ETH</p>
                        </div>
                    </div>
                    <div className="sale-item">
                        <img src={CardImg1} alt="Pixel Avatar" />
                        <div className="sale-info">
                            <h3>Пиксельный Аватар</h3>
                            <p className="sale-price">Продано за: 0.3 ETH</p>
                        </div>
                    </div>
                    <div className="sale-item">
                        <img src={CardImg2} alt="Abstract 3D" />
                        <div className="sale-info">
                            <h3>Абстрактный 3D</h3>
                            <p className="sale-price">Продано за: 0.8 ETH</p>
                        </div>
                    </div>
                    <div className="sale-item">
                        <img src={CardImg3} alt="Islamic Geometric" />
                        <div className="sale-info">
                            <h3>Модельный Обезьянка</h3>
                            <p className="sale-price">Продано за: 0.6 ETH</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="nft-section">
                <h2>Доступные NFT</h2>
                <ProductsList />
            </section>
        </div>
    );
}

export default Home;
