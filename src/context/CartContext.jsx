import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const localData = localStorage.getItem("cartItems");
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error("Error parsing cart items from localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        } catch (error) {
            console.error("Error saving cart items to localStorage:", error);
        }
    }, [cartItems]);

    function addToCart(product) {
        setCartItems((previtems => {
            const existingItem = previtems.find(item => item.id == product.id);
            if (existingItem) {
                return previtems.map(item =>
                    item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...previtems, { ...product, quantity: 1 }];
            }

        }));
        alert(
            `${product.name} ДОБАВЛЕНО В КОРЗИНУ!`);
    }
    function removeFromCart(ProductId) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== ProductId));
        alert(
            `Товар УДАЛЕН ИЗ КОРЗИНЫ!`);
    }
    function increaceQuantity(productId ) {
        setCartItems(prevItems => prevItems.map(item => item.id === productId ? { ...item,quantity: item.quantity + 1} : item));
    }
    function decreaceQuantity(productId ) {
        setCartItems(prevItems =>
            prevItems
                .map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)
                .filter(item => item.quantity > 0)
        );
    }
    function clearCart() {
        setCartItems([]);
    }
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
    );
    const value = {
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        increaceQuantity,
        decreaceQuantity,
        clearCart,
        totalQuantity,
        totalPrice
    }
    return (
        <CartContext.Provider value={ value }>
            {children}
        </CartContext.Provider>
    );
}