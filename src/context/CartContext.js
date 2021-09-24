import { createContext, useState } from 'react'


const CartContext = createContext()


const CartProvider = ({ children, defaultCart = [] }) => {
    const [cart, setCart] = useState(defaultCart)
    const [numberItems, setNumberItems] = useState(0)



    const removeItem = (itemId, quantity) => {
        const newCart = cart.slice()
        const filterCart = newCart.filter(obj => obj.item.id !== itemId)
        setCart(filterCart)
        setNumberItems(parseInt(numberItems) - parseInt(quantity))

    }


    const addItem = (item, quantity) => {
        if (isInCart(item.id)) { 
            console.log('Item existente en Cart.. Se sumo la cantidad elegida')
            const object = cart.find(obj => obj.item.id === item.id) 
            object.quantity += quantity 
            setNumberItems(parseInt(numberItems) + parseInt(quantity))

        } else {
            updateCart({ item, quantity })
            setNumberItems(parseInt(numberItems) + parseInt(quantity))

        }
    }


    const clearCart = () => {
        console.log('clearCart: Cart borrado y sin items');
        setCart(defaultCart)
        setNumberItems(0)

    }


    const isInCart = (itemId) => {
        return cart.find(obj => obj.item.id === parseInt(itemId)) ? true : false
    }



    const updateCart = (obj) => {
        setCart([...cart, obj])
    }

    return (

        <CartContext.Provider value={{ cart, numberItems, clearCart, addItem, updateCart, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }